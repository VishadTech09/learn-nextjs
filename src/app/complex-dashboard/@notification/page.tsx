import Card from "@/app/components/card";
import Link from "next/link";

export default function Notification() {
    return (
        <Card>
            <div>Notification</div><br/>
            <div>More information displayed here</div>
            <Link href='/complex-dashboard/archived'>Archived</Link>
            </Card>
    )
}