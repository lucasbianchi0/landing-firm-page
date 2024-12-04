import { linkWsp } from "@/data/10-wsp";
import Link from "next/link";

const ButtonWsp = () => {
    return (
        <div className="wh-api ">
            <article className="z-[999] wh-fixed whatsapp-pulse">
                <Link href={linkWsp}>
                    <button className=" wh-ap-btn "></button>
                </Link>
            </article>
        </div>
    )
}

export default ButtonWsp;