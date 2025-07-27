import { NavDesktop } from "../../nav/desktop/navDesktop"
import { NavMobile } from "../../nav/mobile/navMobile"
import { navConfig } from "../../nav/nav-config"

export function Header() {
    const headerStle = `w-full p-3 lg:p-4 absolute backdrop-blur-[10px] shadow-[0px_0px_12px_0px_#000] z-[12]`
    
    return (
        <>
            <header className={`${headerStle} flex justify-between lg:hidden`}>
                <NavMobile data={navConfig} />
            </header>
            <header className={`${headerStle} hidden lg:flex justify-center`}>
                <NavDesktop data={navConfig} />
            </header>
        </>
    )
}