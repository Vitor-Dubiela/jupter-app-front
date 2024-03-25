import { signOut } from '@/auth';

import Image from 'next/image';


export default function AccountButton() {
    return (
        <div className="absolute bg-gradient-to-b from-[#ad6d4b8b] to-[#0000000c] to-[65.83%] flex h-[56px] items-center justify-center right-[25px] top-[25px] rounded-[100%] w-[56px]">
            <div className="bg-gradient-to-b from-[#221e14] to-[#352f29] to-[40.83%] flex h-[55px] items-center justify-center right-[25px] top-[25px] rounded-[100%] w-[55px]">
                <div className='bg-[#212121] border border-solid border-[#AD6D4B] flex items-center justify-center h-[49px] rounded-full shadow-account-button-bg w-[49px]'>
                    <form
                        className="bg-[#F29A77] flex items-center justify-center h-[33px] rounded-full shadow-account-button-lg w-[33px]"
                        action={async () => {
                            'use server';
                            await signOut();
                        }}
                    >
                        <button className=" bg-gradient-to-b from-[#db6d39] from-5% via-[#EA8135] via-53% to-[#F29A77] to-95% border-none cursor-pointer h-[32px] flex items-center justify-center outline-none rounded-full w-[32px]">
                            <Image 
                                alt='Account button'
                                height={22}
                                src="/icon-user-fff.png"
                                width={22}
                            />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
