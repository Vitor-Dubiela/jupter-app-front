import type { NextAuthConfig } from 'next-auth';
import { number } from 'zod';


export enum Routes {
    Feed = "/feed",
    FeedNotInterested = "/feed/not-interested",
    FeedMoreInfo = "/feed/more-info",
    FounderProfile = "/founder-profile",
    InvestorProfile = "/investor-profile",
    SignIn = "/"
}


export function validateRouteAuthorization(
    pathname: string
) {
    if (pathname.startsWith(Routes.Feed.toString())) {
        if (pathname.startsWith(Routes.FeedMoreInfo))
            return true;
        if (pathname.startsWith(Routes.FeedNotInterested))
            return true;
        
        return true;
    } else if (pathname.startsWith(Routes.FounderProfile)) {
        return true;
    } else if (pathname.startsWith(Routes.InvestorProfile)) {
        return true;
    } else {
        return false;
    }
}

 
export const authConfig = {
    pages: {
        signIn: '/',
    },
    callbacks: {
        /**
         * * The `authorized` method is used to verify if the request if authorized
         * * to access a page, via Next.js Middleware.
         * @param auth      Contains the user's session.
         * @param request   contains the incoming request.
         * @returns Logged in users are authenticated, otherwise they're redirected to sign-in page.
         */
        authorized({ auth, request: { nextUrl } }) {
            var isLoggedIn = false;
            var params = nextUrl.searchParams;
            var param = params.get("callbackUrl");
            var callbackUrl = !!param ? new URL(param!) : undefined;
            var expires = !!auth?.expires ? new Date(auth?.expires) : null;
            var now = new Date();

            if (!!auth?.user && !!auth.user.role && !!auth.user.token && (!!expires && expires > now))
                isLoggedIn = true;

            const isAuthorizationNeeded = validateRouteAuthorization(nextUrl.pathname);
            
            if (isAuthorizationNeeded) {
                if (isLoggedIn) return true;
                
                return false;   // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                if (callbackUrl && callbackUrl?.pathname.length > 1) return Response.redirect(callbackUrl);
                
                return Response.redirect(new URL('/feed', nextUrl));
            }
            
            return true;
        },
        async signIn({ user }) {
            if (user && user.token && user.id && user.role) return true;

            return false;
        },
        async session({ session, token }) {
            try {
                if (token && session.user) {
                    session.user.role = token.role;
                    session.sessionToken = token.token;
                    session.user.token = token.token;
                    session.userId = token.id!;
                    session.user.id = token.id!;
                    session.expires = token.expiration!;
                }

                return session;
            } catch (error) {
                throw new Error('Failed to use the session callback.');
            }
        },
        async jwt({ token, user }) {
            try {
                if (user) {
                    token.role = user.role;
                    token.token = user.token;
                    token.id = user.id;
                    token.expiration = user.expiration;
                }
                
                return token;
            } catch (error) {
                throw new Error('Failed to use the jwt callback.');
            }
        }
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;



