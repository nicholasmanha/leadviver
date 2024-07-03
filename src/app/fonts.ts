import { Inter, Kumbh_Sans } from 'next/font/google'


export const kumbhSans = Kumbh_Sans({
    weight: ['300', '400', '500'], 
    subsets: ['latin'], 
    variable: '--font-kumbh'
})

export const inter = Inter({
    subsets: ['latin'], 
    variable: '--font-inter'
})



