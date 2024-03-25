import Logo from "@/app/ui/components/Logo/jupter-logo";
import { fetchFeedProfilesData } from "@/app/lib/data";

import Image from "next/image";
import Link from "next/link";


export default async function Page({
    searchParams
}: {
    searchParams: { page: string }
}) {
    const pageId = Number(searchParams.page) || 1;
    const profiles = await fetchFeedProfilesData(pageId, 12);
    
    
    return (
        <div className={`bg-center bg-cover bg-[url("/rings-horizontal-bg.png")] h-screen relative`}>
            <div className="flex flex-col h-full items-center justify-center pb-[125px] pt-[85px] relative">
                <div className="backdrop-blur-sm bg-[#ffffff0a] h-full px-[50px] py-[30px] rounded-[3rem] w-[85%]">
                    <div className="flex flex-row flex-wrap h-1/2 items-start justify-start w-full">
                        {profiles && profiles.map((profile, id) => (
                            <Link className="flex w-1/4 items-center justify-center" href={`/feed/${id+1}`} key={id}>
                                <div className="flex h-full items-center justify-center relative w-44">
                                    <div className="bg-gradient-to-b from-[#282828] from-9% via-[#202020] via-49% to-[#202020] to-95% gap-1 flex flex-col h-3/4 items-center justify-center rounded-[1.5rem] pb-2 pt-5 px-[10px] w-full">
                                        <div className="flex text-center">
                                            {profile.founderProfile.profileName}
                                        </div>
                                        <div className="bg-gradient-to-bl from-[#ffffff44] to-[#202020] flex max-w-[120px] my-[20px] p-[0.5px] rounded-[1rem] w-full">
                                            <Image 
                                                alt='Profile Photo'
                                                className="border-[4px] border-solid border-black rounded-[1rem] max-h-[120px] max-w-[120px]"
                                                height={120}
                                                src={`data:${profile.contentType};base64,${profile.profileImage.fileContents}`}
                                                width={120}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Logo />
            </div>
        </div>
    );
}
