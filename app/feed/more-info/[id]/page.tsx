import { Suspense } from 'react';

import { MoreInfoCardSkeleton } from '@/app/ui/skeletons/skeletons';
import MoreInfoCard from '@/app/ui/components/MoreInfoCard/MoreInfoCard';
import { fetchCompanyMoreInfo } from '@/app/lib/data';
import { FounderProfile } from '@/app/lib/definitions';
import Logo from '@/app/ui/components/Logo/jupter-logo';


export default async function Page({
    params
}: {
    params: 
    { 
        id: string 
    }
}) {
    const founderId = Number(params.id);
    var founderProfile: FounderProfile | null; 

    if (founderId)
        founderProfile = await fetchCompanyMoreInfo(founderId);
    else
        founderProfile = null;


    return (
        <div className={`bg-center bg-cover bg-[url("/rings-horizontal-bg.png")] h-screen relative`}>
            <div className="flex flex-col h-full items-center justify-center pb-[175px] pt-[85px] relative">
                <div className="bg-gradient-to-bl from-[#282828] from-8% via-[#202020] via-49% to-[#202020] to-96% h-full pl-[25px] pr-[45px] py-[30px] rounded-[3rem] w-[75%]">
                    <div className="flex flex-col h-full items-center justify-center max-w-[1165px] w-full">
                        <Suspense 
                            key={founderId}
                            fallback={<MoreInfoCardSkeleton />}
                        >
                            {founderProfile ? (
                                <MoreInfoCard founderProfile={founderProfile} />
                            ) : (
                                <MoreInfoCardSkeleton />
                            )}
                        </Suspense>
                    </div>
                </div>
                <Logo />
            </div>
        </div>
    );
}
