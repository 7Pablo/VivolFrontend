import { Varela_Round, Montserrat } from 'next/font/google';

export const varelaRound = Varela_Round({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-varela-round',
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-montserrat',
});


