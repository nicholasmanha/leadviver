import React, { ReactNode } from 'react';

type BasePageProps = {
    children: ReactNode;
};

export default function BasePage({ children }: BasePageProps) {
    return <div className="bg-background-padding flex justify-center">
        <div className="py-5 px-10 text-text-secondary mx-10 bg-background w-full h-auto max-w-xl h-screen">
            {children}
        </div>
    </div>
}