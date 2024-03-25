'use client';

import styles from './not-interested.module.css';

import { NotInterestedButton } from "@/app/ui/components/Buttons/buttons";

import Link from "next/link";
import { useEffect } from "react";


export default function Error({
    error,
    reset
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
                    <p className={styles.DealInformationTitle}>There was an error trying to dismiss a company.</p>
                    <Link className={styles.ErrorButton} href={`/feed`}>
                        <NotInterestedButton text='Back to the feed.'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}