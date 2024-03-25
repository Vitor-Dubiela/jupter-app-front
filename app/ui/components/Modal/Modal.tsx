'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';


export default function Modal({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(!isOpen);
        
        var promise = new Promise((resolve) => setTimeout(resolve, 590)).then((result) => router.back());
    };
    

    return (
        <Transition.Root appear={true} show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={handleClose}>
                <Transition.Child
                    appear={true}
                    as={Fragment}
                    enter='transition ease-out duration-600'
                    enterFrom='transform opacity-0'
                    enterTo='transform opacity-100'
                    leave='transition ease-in duration-600'
                    leaveFrom='transform opacity-100'
                    leaveTo='transform opacity-0'
                >
                    <div className='fixed inset-0 bg-[#ffffff36] h-full transition-opacity w-full' />
                </Transition.Child>

                <div className='fixed inset-0 w-screen overflow-y-auto'>
                    <div className='flex h-full items-center justify-center pb-32 pt-20'>
                        <Transition.Child
                            appear={true}
                            as={Fragment}
                            enter='transition ease-out duration-600'
                            enterFrom='transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                            enterTo='transform opacity-100 translate-y-0 sm:scale-100'
                            leave='transition ease-in duration-600'
                            leaveFrom='transform opacity-100 translate-y-0 sm:scale-100'
                            leaveTo='transform opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel className='bg-gradient-to-bl from-[#282828] from-8% via-[#202020] via-49% to-[#202020] to-96% h-full overflow-hidden rounded-[3rem] shadow-xl transform transition-all w-[75%]'>
                                <div className="h-full px-9 py-[30px]">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}