import { StyledLinkMobileProps } from "@/src/@types/styledLinkMobileProps"
import { handleScrollToSection } from "@/src/utils/handleScrollToSection"


export function StyledMobileLink({ Icon, href, title }: StyledLinkMobileProps) {
    return (
        <div className="flex items-center">
            <Icon />
            <button
                className="p-3 text-center text-lg outline-none"
                onClick={() => handleScrollToSection(href)}
            >
                {title}
            </button>
        </div>
    )
}