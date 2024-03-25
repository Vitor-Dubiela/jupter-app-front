export enum CompanyType {
    'Angels Group' = 1,
    'Accelerator' = 2,
    'Corporate Venture Capital' = 3,
    'Crowdfunding' = 4,
    'Family Office' = 5,
    'Government Programs' = 6,
    'Incubator' = 7,
    'Micro VC' = 8,
    'Private Equity' = 9,
    'Venture Builder' = 10,
    'Venture Capital' = 11,
};


export enum InvestmentSector {
    Adtech = 1,
    Agtech = 2,
    Biotech = 3,
    Cannabis = 4,
    Cibersecurity = 5,
    Cleantech = 6,
    Construtech = 7,
    Datatech = 8,
    Deeptech = 9,
    Ecommerce = 10,
    Edtech = 11,
    Energytech = 12,
    ESG = 13,
    Femtech = 14,
    Fintech = 15,
    Foodtech = 16,
    Games = 17,
    Govtech = 18,
    Healthtech = 19,
    HRtech = 20,
    Indtech = 21,
    Insurtech = 22,
    Legaltech = 23,
    Logtech = 24,
    MarketPlaces = 25,
    Martech = 26,
    Nanotech = 27,
    Proptech = 28,
    Regtech = 29,
    Retailtech = 30,
    Socialtech = 31,
    Software = 32,
    Sporttech = 33,
    Other = 34
};


export enum LeadOrParticipate {
    Lead = 1,
    LeadAndParticipate = 2,
    Participate = 3
};


export enum InvestmentStage {
    'Accelerators' = 1,
    'Angels' = 2,
    'Pre-Seed' = 3,
    'Seed' = 4,
    'Series-A' = 5,
    'Series-B' = 6,
    'Series-C' = 7
};


export enum StateWithMoreActivity {
    AC = 1,
    AL = 2,
    AP = 3,
    AM = 4,
    BA = 5,
    CE = 6,
    DF = 7,
    ES = 8,
    GO = 9,
    MA = 10,
    MT = 11,
    MS = 12,
    MG = 13,
    PA = 14,
    PB = 15,
    PR = 16,
    PE = 17,
    PI = 18,
    RJ = 19,
    RN = 20,
    RS = 21,
    RO = 22,
    RR = 23,
    SC = 24,
    SP = 25,
    SE = 26,
    TO = 27    
};


export type Company = {
    id: string;
    assetsUnderManagement: number;
    createdAt: string;
    companyName: string;
    companyTypeId: number;
    companyWebsite: string;
    founderProfileId: string;
    stateWithMoreActivity: StateWithMoreActivity;
    updatedAt: string;
};


export type GetFounderProfileResponse = {
    founderProfile: FounderProfile;
    profileImage?: any;
    contentType?: string;
}


export type FounderProfile = {
    id: string;
    amountOfStartupsInPortfolio?: number;
    contentType?: string;
    createdAt: string;
    dryPowder: number;
    imageFile?: string;
    investmentFunds: number;
    isAgnosticFounder: boolean;
    leadOrParticipate: number;
    maxTicket: number;
    minTicket: number;
    profileImage?: string;
    profileName: string;
    recurrentTicket: number;
    updatedAt: string;
    userId: string;

    company?: Company;
    participationStage: InvestmentStage;
    sectors: InvestmentSector[];
    stageUsedToInvest: InvestmentStage;
};


export type User = {
    id: string;
    email: string;
    name: string;
    token: string;
};
