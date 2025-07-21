import Image from "next/image"
import { SideBar } from "./sideBar"
import { NavMobileProps } from "@/src/@types/navMobileProps"

const flexCenterStyle = "flex items-center justify-center"

export function NavMobile({ data }: NavMobileProps) {
    return (
        <nav className="flex justify-between items-center w-full overflow-hidden">
            <a href="/" className={`${flexCenterStyle} w-[25%] pt-1.5`}>
                <Image className="w-[44px] md:w-[55px]" src="/logo/logo.svg" alt={"Logo do portifólio"} width={44} height={100} />
            </a>
            <div className="flex w-[75%] gap-3 justify-end">
                <div className={flexCenterStyle}>
                    <SideBar data={data} />
                </div>
            </div>
        </nav>
    )
}