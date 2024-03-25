import styles from './skeletons.module.css';

import { 
    Button, 
    NotInterestedButton 
} from '@/app/ui/components/Buttons/buttons';

import Image from 'next/image';
import Link from 'next/link';


export function FounderProfileCardSkeleton() {
    return (
        <div className={styles.ModalContent}>
            <p className={styles.ModalHeading}>
                Some Founder’s Startup
            </p>
            <div className={styles.CompanyLogoWrapper}>
                <Image 
                    alt='Company Logo'
                    className={styles.ProfileImage}
                    height={230}
                    src="/icon-user.png"
                    width={230}
                />
            </div>
            <p className={styles.DealDescription}>
                Let’s close a deal?
            </p>
            <div className={styles.ButtonsBox}>
                <Link className={styles.DisabledLink} aria-disabled href="">
                    <Button text="More info"/>
                </Link>
                <Link className={styles.DisabledLink} href="">
                    <NotInterestedButton text='Not interested'/>
                </Link>
            </div>
        </div>
    );
}

export function MoreInfoCardSkeleton() {
    return (
        <>
            <div className={styles.ModalHeader}>
                <p className={styles.ModalHeading}>
                    That is awesome!
                </p>
                <p className={styles.ModalSubtitle}>
                    Check below some other organization's infos that might bring you interest.
                </p>
            </div>
            <div className={styles.DealInformation}>
                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Role or function within the startups ecosystem: <span className={styles.DealBulletPoints}>Represents an organization.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Organization's name: <span className={styles.DealBulletPoints}>The New Org.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Website: <a className={styles.DealLink}>http://localhost:3000</a></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>State the organization is more active: <span className={styles.DealBulletPoints}>PR.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>How many funds or investment vehicles the org has: <span className={styles.DealBulletPoints}>R$2000,00.</span></p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Preferences of the Organization:</p>
                    <p className={styles.DealBulletPoints}>- Describes itself as a Private Equity.</p>
                    <p className={styles.DealBulletPoints}>- Organization is more used to invest in Pre-seed stage.</p>
                    <p className={styles.DealBulletPoints}>- The main funding stage is Angel.</p>
                    <p className={styles.DealBulletPoints}>- The organization is open to invest in different sectors.</p>
                    <p className={styles.DealBulletPoints}>- Mostly focused on Agrotech and Fintech.</p>
                    <p className={styles.DealBulletPoints}>- There're 15 startups that are part of their portfolio.</p>
                    <p className={styles.DealBulletPoints}>- R$180.000,00 under management.</p>
                </div>

                <div className={styles.DealInformationSection}>
                    <p className={styles.DealInformationTitle}>Org's numbers:</p>
                    <p className={styles.DealBulletPoints}>- Either leads and participates in investment rounds.</p>
                    <p className={styles.DealBulletPoints}>- Dry Powder of R$45.000,00.</p>
                    <p className={styles.DealBulletPoints}>- Min ticket of R$45.000,00.</p>
                    <p className={styles.DealBulletPoints}>- Max ticket of R$45.000,00.</p>
                    <p className={styles.DealBulletPoints}>- Most recurrent investment ticket of R$45.000,00.</p>
                </div>
            </div>
            <div className={styles.ButtonsBox}>
                <Link className={styles.ButtonLink} href="/deals"><Button text="Follow"/></Link>
                <Link href="/deals/not-interested"><Button text="Dismiss"/></Link>
            </div>
        </>
    );
}
