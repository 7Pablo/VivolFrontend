import { League_Spartan, Poppins } from 'next/font/google';

export const league_spartan = League_Spartan({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-ls',
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-p',
});
