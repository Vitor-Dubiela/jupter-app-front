'use client';

import Link from 'next/link';
import styles from './more-info.module.css';

import { useEffect } from "react";
import { NotInterestedButton } from '@/app/ui/components/Buttons/buttons';


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);


    return (
        <div className={styles.ModalContent_Error}>
            <div className={styles.DealInformation}>
                <div className={styles.DealInformationSection_Error}>
                    <p className={styles.DealInformationTitle}>There was an error trying to get more info from a company.</p>
                    <Link className={styles.ErrorButton} href={`/feed`}>
                        <NotInterestedButton text='Back to the feed.'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}