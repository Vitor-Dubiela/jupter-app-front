import styles from '../not-interested.module.css';

import { NotInterestedButton } from '@/app/ui/components/Buttons/buttons';
import Logo from '@/app/ui/components/Logo/jupter-logo';
import NotInterestedTextArea from '@/app/ui/components/NotInterestedTextArea/NotInterestedTextArea';


export default function Page({
    params
}: {
    params: {
        id: string
    }
}) {
    const founderId = Number(params.id);
    console.log("founderId... ", founderId);
    if (!founderId) {
        throw new Error;
    }


    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <div className={styles.ModalContent}>
                        <div className={styles.ModalHeader}>
                            <p className={styles.ModalHeading}>
                                Why you are not interested?
                            </p>
                            <p className={styles.ModalSubtitle}>
                                Help us improve! Tell us why you're not interested, and our algorithm will refine your feed posts.
                            </p>
                        </div>
                        <NotInterestedTextArea label=''/>
                        <div className={styles.ButtonsBox}>
                            <NotInterestedButton text="Send"/>
                        </div>
                    </div>
                </div>
            </div>
            <Logo />
        </div>
    );
}