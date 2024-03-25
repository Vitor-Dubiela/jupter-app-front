import localFont from 'next/font/local';


const consolas = localFont({
    src: '../../Consolas.ttf',
});

export function Button({
    text 
}: {
    text: string
}) {
    return (
        <div className="w-fit">
            <button className="bg-[#ffffff12] border border-solid border-[#ffffff16] cursor-pointer font-thin px-[45px] py-[8px] rounded-[1.2rem] shadow-md shadow-[#00000035] text-lg">
                {text}
            </button>
        </div>
    );
}

export function ButtonModal({
    text 
}: {
    text: string
}) {
    return (
        <div className="w-fit">
            <div className="bg-[#ffffff12] border border-solid border-[#ffffff16] cursor-pointer font-thin px-[45px] py-[8px] rounded-[1.2rem] shadow-md shadow-[#00000035] text-lg">
                {text}
            </div>
        </div>
    );
}

export function NotInterestedButton({
    text
}: {
    text: string
}) {
    return (
        <div className="bg-none cursor-pointer w-fit">
            <p className="hover:text-[#fe6233] hover:scale-125 text-[#fe6233a8] text-xs px-[28px] py-[8px] transition-[0.25s]">
                {text}
            </p>
        </div>
    );
}
