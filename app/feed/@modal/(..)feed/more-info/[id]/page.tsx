import { Suspense } from 'react';
import { headers } from 'next/headers';

import { MoreInfoCardSkeleton } from '@/app/ui/skeletons/skeletons';
import { fetchCompanyMoreInfo } from '@/app/lib/data';
import { FounderProfile } from '@/app/lib/definitions';
import Modal from '@/app/ui/components/Modal/Modal';
import MoreInfoCardModal from '@/app/ui/components/MoreInfoCard/MoreInfoCardModal';



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
        <Modal>
            <div className='flex flex-col h-full items-center justify-center w-full'>
                <Suspense 
                    key={founderId}
                    fallback={<MoreInfoCardSkeleton />}
                >
                    {founderProfile ? (
                        <MoreInfoCardModal founderProfile={founderProfile} />
                    ) : (
                        <MoreInfoCardSkeleton />
                    )}
                </Suspense>
            </div>
        </Modal>
    );
}
