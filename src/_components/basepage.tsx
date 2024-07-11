import React, { ReactNode } from 'react';
import Footer from './footer';

type BasePageProps = {
    children: ReactNode;
};

export default function BasePage({ children }: BasePageProps) {
    return <div>
        <div className="bg-background-padding flex justify-center min-h-screen">
            <div className="py-5 lg:px-10 px-2 text-text-secondary lg:mx-10 mx-2 bg-background w-full h-auto max-w-xl">
                {children}
            </div>
        </div>
        <Footer />
    </div>
}