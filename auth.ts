import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from './app/lib/definitions';
import loginData from './res/login-data.json';


async function getUser(
    email: string,
    password: string
) {
    try {
        var user = loginData as any;
        var date = new Date();
        date.setUTCDate(date.getUTCDate() + 7);
        user.expiration = date.toJSON();

        return user as User;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
 

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ 
                        email: z.string().email(), 
                        password: z.string().min(6) 
                    })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email, password);

                    console.log(user);
                    if (user && user.token) return user;
                }

                console.log('Invalid credentials');

                return null;
            },        
        }),
    ],
});
