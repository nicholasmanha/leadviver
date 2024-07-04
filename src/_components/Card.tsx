import Typography from "./Typography"
import { Button } from "./button"
import { ReactElement } from "react"


interface CardProps {
    title: ReactElement | String;
    info?: ReactElement | String;
    children: any
}

export default function Card({ title, info, children }: CardProps) {
    return (
        <div className="bg-primary w-full mx-4 rounded-2xl flex flex-col justify-center p-4">
            <Typography variant="h3">{title}</Typography>
            {children}
        </div>
    );

}
