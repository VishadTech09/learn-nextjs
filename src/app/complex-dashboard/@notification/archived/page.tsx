import Card from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
    return (
        <Card>
            <div>Notification</div><br />
            <Link href='/complex-dashboard'>Default</Link>
        </Card>
    )
}