import Image from "next/image"
import { SideBar } from "./sideBar"
import { Button } from "../../buttons/button"
import { NavMobileProps } from "@/src/@types/navMobileProps"
import { PATH_PAGE } from "@/src/routes/paths"

const flexCenterStyle = "flex items-center justify-center"

export function NavMobile({ data }: NavMobileProps) {
    return (
        <nav className="flex justify-between items-center w-full overflow-hidden">
            <a href="/" className={`${flexCenterStyle} w-[25%] pt-1.5`}>
                <Image className="w-[90px] md:w-[120px]" src="/img/logo8labs.svg" alt={"CHANGE THIS ALT"} width={100} height={100} />
            </a>
            <div className="flex w-[75%] gap-3 justify-end">
                <div className={flexCenterStyle}>
                    <SideBar data={data} />
                </div>
            </div>
        </nav>
    )
}