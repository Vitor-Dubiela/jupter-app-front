import { authConfig } from "@/auth.config";
import { Company, FounderProfile, GetFounderProfileResponse, InvestmentStage, InvestmentSector } from './definitions';
import feedProfileData from '../../res/feed-profiles-data.json';
import moreInfoData from '../../res/more-info-data.json';

import { unstable_noStore as noStore } from "next/cache";
import getServerSession from 'next-auth';


export async function fetchCompanyMoreInfo(
    founderId: number
) {
    noStore();

    const session = await getServerSession(authConfig);

    const user = await session.auth().then(e => e?.user);

    try {
        const response = moreInfoData[founderId - 1] as any;
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
        const response = feedProfileData as any;
        var list = response.profiles as GetFounderProfileResponse[];

        return list;
    } catch (error) {
        console.log('API Error: ', error);
        throw new Error('Failed to fetch the profiles for the feed.');
    }
}
