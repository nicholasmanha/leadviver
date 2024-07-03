import Typography from "./Typography";

interface TProps {
    v: string;
    cn: string;
}

export default function T({v, cn}: TProps) {
    return <Typography variant={v} className={cn} />
}