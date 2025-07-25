import { buttonProps } from "@/src/@types/buttonProps"
import { handleScrollToSection } from "@/src/utils/handleScrollToSection"

export function Button({ path, title, children, bgicon, icon, className, ...props }: buttonProps) {
    return (
        <button
            className={`outline-none flex items-center gap-1 p-1 bg-strongOrange rounded-md shadow-[0px_0px_15px_0px_rgba(0,_0,_0,_0.25)] ${className}`}
            {...props}
            onClick={() => handleScrollToSection(path)}
        >
            {title}
            <div className={`rounded-full bg-${bgicon ? bgicon : `white`} w-fit h-fit p-2 ${icon} items-center justify-center  transition-colors duration-500`}>
                {children}
            </div>
        </button>
    )
}