'use client';

import { 
    FounderProfile, 
    InvestmentSector, 
    InvestmentStage, 
    LeadOrParticipate, 
    StateWithMoreActivity 
} from "@/app/lib/definitions";

import { useRouter } from "next/navigation";
import { ButtonModal } from "../Buttons/buttons";


function getFoundersSectorsText(sectors: InvestmentSector[]) {
    var sectorsString = [];
    
    for (let i = 0; i < sectors.length; i++) {
        var sectorName = getInvestmentSectorName(sectors[i]);
        sectorsString.push(sectorName);
    }
    
    return sectorsString.join(', ');
}

function getInvestmentSectorName(id: number) {
    return InvestmentSector[id];
}

function getLeadOrParticipateText(leadOrParticipate: number) {
    var leadOrParticipateText = "";

    if (LeadOrParticipate[leadOrParticipate] === LeadOrParticipate[1])
        leadOrParticipateText = "Prefers to lead investment rounds";
    else if (LeadOrParticipate[leadOrParticipate] === LeadOrParticipate[2])
        leadOrParticipateText = "Either leads and participates of investment rounds";
    else
        leadOrParticipateText = "Prefers to participate of investment rounds";

    return leadOrParticipateText;
}


export default function MoreInfoCardModal({
    founderProfile
}: {
    founderProfile: FounderProfile
}) {
    const router = useRouter();
    const handleClose = () => router.back();

    var leadOrParticipateText = getLeadOrParticipateText(founderProfile.leadOrParticipate);
    var foundersSectorsText = getFoundersSectorsText(founderProfile.sectors);


    return (
        <div className="overflow-scroll overflow-x-hidden">
            <div className="flex flex-col items-center">
                <p className="text-center text-[30px]">
                    That is awesome!
                </p>
                <p className="text-center text-[21px]">
                    Check below some other infos about {founderProfile.company?.companyName} that might bring you interest.
                </p>
            </div>

            <div className="pt-[40px]">
                {founderProfile ? (
                    <div className="mb-[40px] w-[90%]">
                        <p className="text-[#9D9D9D] text-[22px]">Role or function within the startups ecosystem: <span className="text-white text-[18px]">Represents an organization</span></p>
                    </div>
                ) : (
                    <div className="mb-[40px] w-[90%]">
                        <p className="text-[#9D9D9D] text-[22px]">Role or function within the startups ecosystem: <span className="text-white text-[18px]">Represents an investor</span></p>
                    </div>
                )}

                <div className="mb-[40px] w-[90%]">
                    <p className="text-[#9D9D9D] text-[22px]">Organization's name: <span className="text-white text-[18px]">{founderProfile.company?.companyName}</span></p>
                </div>

                <div className="mb-[40px] w-[90%]">
                    <p className="text-[#9D9D9D] text-[22px]">Website: <a className="cursor-pointer text-[#FF6B00] text-[18px]">{founderProfile.company?.companyWebsite}</a></p>
                </div>

                <div className="mb-[40px] w-[90%]">
                    <p className="text-[#9D9D9D] text-[22px]">State the organization is more active: <span className="text-white text-[18px]">{StateWithMoreActivity[founderProfile.company?.stateWithMoreActivity!]}</span></p>
                </div>

                <div className="mb-[40px] w-[90%]">
                    <p className="text-[#9D9D9D] text-[22px]">How many funds or investment vehicles the org has: <span className="text-white text-[18px]">R${founderProfile.investmentFunds.toFixed(2)}</span></p>
                </div>

                <div className="flex flex-col gap-1 mb-[40px] w-[90%]">
                    <p className="text-[#9D9D9D] text-[22px]">Preferences of the Organization:</p>
                    
                    <p className="text-white text-[18px]">
                        - Describes itself as a {InvestmentStage[founderProfile.company?.companyTypeId!]}
                    </p>
                    
                    <p className="text-white text-[18px]">
                        - Organization is more used to invest in {InvestmentStage[founderProfile.stageUsedToInvest]} stage
                    </p>
                    
                    <p className="text-white text-[18px]">
                        - The main funding stage is {InvestmentStage[founderProfile.participationStage]}
                    </p>
                    
                    {founderProfile.isAgnosticFounder ? (
                        <p className="text-white text-[18px]">
                            - The organization is open to invest in different sectors
                        </p>
                    ) : (
                        <p className="text-white text-[18px]">
                            - The organization isn't likely to invest in many sectors
                        </p>
                    )}
                    
                    <p className="text-white text-[18px]">
                        - Focused on the following sectors: {foundersSectorsText}
                    </p>
                    
                    {founderProfile.amountOfStartupsInPortfolio && founderProfile.amountOfStartupsInPortfolio > 1 ? (
                        <p className="text-white text-[18px]">
                            - There're {founderProfile.amountOfStartupsInPortfolio} startups that are part of their portfolio
                        </p>
                    ) : (
                        <p className="text-white text-[18px]">
                            - There's {founderProfile.amountOfStartupsInPortfolio} startup that is part of their portfolio
                        </p>
                    )}
                    
                    <p className="text-white text-[18px]">
                        - R${founderProfile.company?.assetsUnderManagement.toFixed(2)} under management
                    </p>
                </div>

                <div className="flex flex-col gap-1 mb-[40px] w-[90%]">
                    <p className="text-[#9D9D9D] text-[22px]">Org's numbers:</p>

                    <p className="text-white text-[18px]">
                        - {leadOrParticipateText}
                    </p>

                    <p className="text-white text-[18px]">
                        - Dry Powder of R${founderProfile.dryPowder.toFixed(2)}
                    </p>

                    <p className="text-white text-[18px]">
                        - Min ticket of R${founderProfile.minTicket.toFixed(2)}
                    </p>

                    <p className="text-white text-[18px]">
                        - Max ticket of R${founderProfile.maxTicket.toFixed(2)}
                    </p>

                    <p className="text-white text-[18px]">
                        - Most recurrent investment ticket of R${founderProfile.recurrentTicket.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className="flex gap-10 items-center justify-center mb-[10px] mt-[70px] w-full">
                <a onClick={handleClose}>
                    <ButtonModal text={"Follow"} />
                </a>
                <a onClick={handleClose}>
                    <ButtonModal text={"Dismiss"} />
                </a>
            </div>
        </div>
    );
}