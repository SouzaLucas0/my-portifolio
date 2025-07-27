import Link from "next/link"
import { Github, Instagram, Linkedin, X } from "lucide-react"
import { StyledDesktopLink } from "../../nav/styledLink/styledDesktopLink"
import { navConfig } from "../../nav/nav-config"

export function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Lucas Souza. All rights reserved.</p>
                </div>
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {navConfig.map((item, index) => (
                        <StyledDesktopLink
                            key={index}
                            href={item.path}
                            title={item.title}
                        />
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/SouzaLucas0"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-200 transition-colors"
                        aria-label="GitHub"
                        prefetch={false}
                    >
                        <Github className="h-6 w-6" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/souzalucas0/"                        
                        target="_blank"
                        className="text-gray-400 hover:text-gray-200 transition-colors"
                        aria-label="LinkedIn"
                        prefetch={false}
                    >
                        <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link
                        href="https://instagram.com/_lucass.fs/#"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-200 transition-colors"
                        aria-label="Instagram"
                        prefetch={false}
                    >
                        <Instagram className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
