import NextAuth, {
    DefaultSession,
    DefaultUser
} from 'next-auth';


export enum Role {
    admin = "admin",
    investor = "investor",
    founder = "founder"
}


interface IUser extends DefaultUser {
    /**
     * Token expiration date
     */
    expiration?: Date & string;
    
    /**
     * Id of the user
     */
    id?: string;
    
    /**
     * Role of the user
     */
    role?: Role;

    /**
     * The token with the user's credentials
     */
    token: string;
}


declare module "next-auth" {
    interface User extends IUser {}
    interface Session extends DefaultSession {
        user: User;
    }
}

declare module "@auth/core/jwt" {
    interface JWT extends IUser {}
}
