import AccountButton from "@/app/ui/components/AccountButton/account-button";


export default function FeedLayout({
    children,
    modal
}: {
    children: React.ReactNode
    modal: React.ReactNode
}) {
    return (
        <div>
            <div>
                {children}
                {modal}
            </div>
            <div>
                <AccountButton />
            </div>
        </div>
    );
}
