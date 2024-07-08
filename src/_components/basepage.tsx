import React, { ReactNode } from 'react';
import Footer from './footer';

type BasePageProps = {
    children: ReactNode;
};

export default function BasePage({ children }: BasePageProps) {
    return <div>
        <div className="bg-background-padding flex justify-center min-h-screen">
            <div className="py-5 px-10 text-text-secondary mx-10 bg-background w-full h-auto max-w-xl">
                {children}
            </div>
        </div>
        <Footer />
    </div>
}