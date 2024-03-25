import Logo from '@/app/ui/components/Logo/jupter-logo';
import FounderProfileCard from '@/app/ui/components/FounderProfileCard/FounderProfileCard';
import { FounderProfileCardSkeleton } from '@/app/ui/skeletons/skeletons';
import { fetchFeedProfilesData } from '@/app/lib/data';

import { Suspense } from 'react';
import Link from 'next/link';


export default async function Page({
    params
}: {
    params: {
        id: string
    }
}) {
    var pageNumber = Number(params.id) || 1;
    pageNumber = pageNumber >= 1 ? pageNumber : 1;

    const profiles = await fetchFeedProfilesData(pageNumber);
    const founderProfile = profiles?.at(0);
    

    return (
        <div className={`bg-[url("/rings-horizontal-bg.png")] bg-center bg-cover h-screen relative`}>
            <div className="flex h-full items-center justify-center relative">
                <div className="bg-gradient-to-b from-[#282828] from-9% via-[#202020] via-49% to-[#202020] to-95% rounded-[3.5rem] px-[10px] py-[30px]">
                    <Suspense
                        key={pageNumber}
                        fallback={<FounderProfileCardSkeleton />}
                    >
                        {founderProfile && founderProfile != null ? (
                            <FounderProfileCard data={founderProfile}/>
                        ) : (
                            <FounderProfileCardSkeleton />
                        )}
                    </Suspense>
                </div>
            </div>
            <Logo />
        </div>
    );
}
