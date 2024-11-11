import Link from "next/link";

const ButtonWsp = () => {
    return (
        <div className="wh-api ">
            <article className="z-[999] wh-fixed whatsapp-pulse">
                <Link href="https://api.whatsapp.com/send?phone=5491133001233&text=hello world">
                    <button className=" wh-ap-btn "></button>
                </Link>
            </article>
        </div>
    )
}

export default ButtonWsp;