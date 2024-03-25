'use client';

import { GetFounderProfileResponse } from '@/app/lib/definitions';
import { 
    Button, 
    NotInterestedButton 
} from '@/app/ui/components/Buttons/buttons';

import Image from 'next/image';
import Link from 'next/link';


export default function FounderProfileCard({
    data
}: {
    data: GetFounderProfileResponse
}) {
    return (
        <div className="flex flex-col items-center justify-center max-w-[400px] w-full">
            <p className="text-center text-xl">
                Let's close a deal?
            </p>

            <div className="bg-gradient-to-bl from-[#ffffff44] to-[#202020] flex max-w-[160px] my-[20px] p-[0.5px] rounded-[1rem] w-full">
                {data.profileImage ? (
                    <Image 
                        alt='Company Logo'
                        className="border-[4px] border-solid border-black rounded-[1rem] max-h-[160px] max-w-[160px]"
                        height={230}
                        src={`data:${data.contentType};base64,${data.profileImage.fileContents}`}
                        width={230}
                    />
                ) : (
                    <Image 
                        alt='Company Logo'
                        className="border-[4px] border-solid border-black rounded-[1rem] max-h-[150px] max-w-[150px]"
                        height={230}
                        src="/icon-user.png"
                        width={230}
                    />
                )}
            </div>

            <div className="px-[50px] py-[20px]">
                <p className="text-xl text-center">
                    {data.founderProfile.profileName} follows in common with you: NEN and <span className="text-[#fe6233] cursor-pointer">3 more</span>
                </p>
            </div>

            <div className="flex flex-col gap-y-3 items-center justify-center mt-[30px]">
                <Link href={`/feed/more-info/${data.founderProfile.id}`}>
                    <Button text="More info"/>
                </Link>
                <Link href={`/feed/not-interested/${data.founderProfile.id}`}>
                    <NotInterestedButton text='Not interested'/>
                </Link>
            </div>
        </div>
    );
}
