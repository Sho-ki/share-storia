import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
// const getUser = async () => {
//   const cookies = new Cookies();

//   const sessionCookie = cookies.get('appSession');
  
//   if (!sessionCookie) return null;

//   const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
//     headers: {
//       cookie: `appSession=${sessionCookie}`
//       // cookie: cookies().getAll().map(c => `${c.name}=${c.value}`).join(';') -- all cookies
//     }
//   })
//   const user: UserProfile = await res.json()
//   return user
// };
