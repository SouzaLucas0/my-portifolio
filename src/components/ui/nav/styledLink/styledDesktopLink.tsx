import { StyledLinkDesktopProps } from "@/src/@types/styledLinkDesktopProps"
import { handleScrollToSection } from "@/src/utils/handleScrollToSection"

export function StyledDesktopLink({ href, title }: StyledLinkDesktopProps) {
    return (
        <div className="flex items-center">
            <button
                className="p-3 text-center text-lg hover:underline underline-offset-8 outline-none"
                onClick={() => handleScrollToSection(href)}
            >
                {title}
            </button>
        </div>
    )
}