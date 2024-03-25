'use server';

import { fetchFeedProfilesData } from "@/app/lib/data";

export default async function SubmitButton({
    text 
}: {
    text: string
}) {
    const profiles = await fetchFeedProfilesData(1);
    console.log(profiles);

    return (
        <div className="w-fit">
            <div className="bg-[#ffffff12] border border-solid border-[#ffffff16] cursor-pointer font-thin px-[45px] py-[8px] rounded-[1.2rem] shadow-md shadow-[#00000035] text-lg">
                {text}
            </div>
        </div>
    );
}