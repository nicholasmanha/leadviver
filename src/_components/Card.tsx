import Typography from "./Typography"
import { ReactElement } from "react"
import { LuInfo } from "react-icons/lu";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "./HoverCard"

interface CardProps {
    title: ReactElement | String;
    info?: ReactElement | String;
    children: any
}

export default function Card({ title, info, children }: CardProps) {
    return (
        <div className="bg-primary w-full mx-4 rounded-2xl flex flex-col justify-center p-4">
            <div className="flex items-center h-full">
                <Typography className="inline-flex" variant="h3">{title} </Typography>

                {info &&
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <LuInfo className="mx-2 pt-1 w-4 h-4" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-background">
                            <div className="flex justify-between space-x-4">

                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@nextjs</h4>
                                    <p className="text-sm">
                                        The React Framework – created and maintained by @vercel.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        
                                        <span className="text-xs text-muted-foreground">
                                            Joined December 2021
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                }
            </div>


            {children}

        </div>
    );

}
