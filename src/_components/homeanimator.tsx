'use client';
import Image from 'next/image'


export default function HomeAnimator() {
    return <div className="bg-primary w-1/2">
        <Image 
            className="animate-spin"
            src="/signup_home_imgs/house1.jpg"
            width={500}
            height={500}
            alt="A suburbian Home"
        />
    </div>
}