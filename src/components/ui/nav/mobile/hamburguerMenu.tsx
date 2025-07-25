import { MenuHamburguerIconProps } from "@/@types/menuHamburguerIconProps"

export function MenuHamburguerIcon(props: MenuHamburguerIconProps) {
    const isOpen = props.isOpen

    const styledContainer = "bg-white block transition-all duration-300 ease-out h-0.5 md:h-1 w-6 md:w-8 rounded-sm"

    return (
        <>
            <button className="flex flex-col justify-center items-center p-3">
                <span className={`${styledContainer} ${isOpen ? 'rotate-45 translate-y-1 md:translate-y-2' : '-translate-y-0.5'}`}></span>
                <span className={`${styledContainer} my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`${styledContainer} ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button >
        </>
    )
}