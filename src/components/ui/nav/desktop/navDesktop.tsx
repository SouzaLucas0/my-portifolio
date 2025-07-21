'use client'

import Image from "next/image"
import { StyledDesktopLink } from "../styledLink/styledDesktopLink"
import { NavDesktopProps } from "@/src/@types/navDesktopProps"
import { Button } from "../../buttons/button"
import { PATH_PAGE } from "@/src/routes/paths"
import { useState } from "react"

export function NavDesktop({ data }: NavDesktopProps) {
    const [ logo, setLogo] = useState('logo')

    return (
        <nav className="flex justify-between items-center w-full max-w-[1440px] relative">
            <a 
                href="/" 
                className={`flex items-center justify-center pt-1.5 font-thin text-xl hover:scale-105 transition-all duration-500`}
                onMouseOver={()=> setLogo('logoHover') }
                onMouseOut={()=> setLogo('logo') }
            >
                <Image
                    className="w-[10vw] max-w-[44px]"
                    src={`/logo/${logo}.svg`}
                    alt={"Logo do portifólio"}
                    width={200}
                    height={200}
                />
                <span className="px-2 text-2xl">|</span>
                <span className="uppercase">Portfólio</span>
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