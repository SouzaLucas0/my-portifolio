import Image from "next/image"
import { StyledDesktopLink } from "../styledLink/styledDesktopLink"
import { NavDesktopProps } from "@/src/@types/navDesktopProps"
import { Button } from "../../buttons/button"
import { PATH_PAGE } from "@/src/routes/paths"

export function NavDesktop({ data }: NavDesktopProps) {
    return (
        <nav className="flex justify-between items-center w-full max-w-[1440px] relative">
            <a href="/" className={`flex items-center justify-center pt-1.5`}>
                <Image
                    className="w-[10vw] max-w-[144px]"
                    src="/img/logoHefesto.svg"
                    alt={"CHANGE THIS ALT"}
                    width={200}
                    height={200}
                />
            </a>
            <div className="flex justify-around xl:gap-5">
                {data.map((item, index) => (
                    <StyledDesktopLink
                        key={index}
                        href={item.path}
                        title={item.title}
                    />
                ))}
            </div>
        </nav>
    )
}