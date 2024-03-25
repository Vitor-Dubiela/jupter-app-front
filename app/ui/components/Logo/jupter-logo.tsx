import Image from 'next/image';


export default function Logo() {
    return (
        <div className="absolute bottom-12 flex items-center justify-center w-full">
            <Image 
                alt='Jupter logo'
                className='Logo'
                src="/jupter-logo.png"
                width={200}
                height={50}
            />
        </div>
    );
}