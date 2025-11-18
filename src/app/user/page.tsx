import Link from "next/link";

export default function UserList() {
    return (
        <ul>
            <li><Link href={"/user/1"}>User 1</Link></li>
            <li><Link href={"/user/2"}>User 2</Link></li>
            <li><Link href={"/user/3"}>User 3</Link></li>
        </ul>
    )
}