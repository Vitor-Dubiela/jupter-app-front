import { authConfig } from "@/auth.config";
import { Company, FounderProfile, GetFounderProfileResponse, InvestmentStage, InvestmentSector } from './definitions';

import { unstable_noStore as noStore } from "next/cache";
import getServerSession from 'next-auth';


export async function fetchCompanyMoreInfo(
    founderId: number
) {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    try {
        const result = await fetch(`http://localhost:5065/api/FounderCompany/GetMoreInfo?founderId=${founderId}`, {
            headers: {
                Authorization: `Bearer ${user?.token}`,
                'Content-Type': 'application/json',
            },
            method: 'GET'
        });

        if (result.status == 404) return null;

        const response = await result.json();
        var founderProfile = response.founderProfile as FounderProfile;
        founderProfile.company = response.founderCompany as Company;
        founderProfile.participationStage = response.participationStage as InvestmentStage;
        founderProfile.sectors = response.sectors as InvestmentSector[];
        founderProfile.stageUsedToInvest = response.stageUsedToInvest as InvestmentStage;

        return founderProfile;
    } catch (error) {
        console.log('API Error: ', error);
        throw new Error('Failed to fetch more info of the company.');
    }
}

export async function fetchFeedProfilesData(
    pageNumber: number,
    take?: number,
    keyword?: string
) {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    if (!take)
        take = 1;

    try {
        const result = await fetch('http://localhost:5065/api/FounderProfile/GetFeedProfiles', {
            body: JSON.stringify({
                keyword: keyword,
                pageNumber: pageNumber,
                take: take,
                userId: user?.id
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user?.token}`
            },
            method: 'POST'
        });

        if (result.status == 404) return null;

        const response = await result.json();
        var list = response.profiles as GetFounderProfileResponse[];

        return list;
    } catch (error) {
        console.log('API Error: ', error);
        throw new Error('Failed to fetch the profiles for the feed.');
    }
}


// await new Promise((resolve) => setTimeout(resolve, 5000)); // For testing
export async function fetchFounderProfileData(companyId: number) {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    try { 
        const result = await fetch(`http://localhost:5065/api/FounderProfile/GetById?id=${companyId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        });
        
        if (result.status == 404) return null;

        const response = await result.json();

        const image = `data:${response.profileImage.contentType};base64,${response.profileImage.fileContents}`;

        return { 
            id: response.founderProfile.id, 
            contentType: response.profileImage.contentType,
            createdAt: response.founderProfile.createdAt, 
            profileImage: response.founderProfile.profileImage, 
            profileName: response.founderProfile.profileName, 
            updatedAt: response.founderProfile.updatedAt, 
            userId: response.founderProfile.userId, 
            imageFile: image
        } as FounderProfile;
    } catch (error) {
        console.error('API Error: ', error);
        throw new Error('Failed to fetch the Founder Profile Data.');
    }
}

export async function fetchCountCompanies() {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    try {
        const result = await fetch("http://localhost:5065/api/FounderCompany/GetAmountOfCompanies", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        });

        const total = await result.json();

        return total;
    } catch (error) {
        console.log('API Error: ', error);
        throw new Error('Failed to fetch count companies.');
    }
}
