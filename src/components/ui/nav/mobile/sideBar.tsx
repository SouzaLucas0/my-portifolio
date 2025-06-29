"use client"

import Image from "next/image";
import { useState } from "react";
import { MenuHamburguerIcon } from "./hamburguerMenu";
import { StyledMobileLink } from "../styledLink/styledMobileLink";
import { NavMobileProps } from "@/src/@types/navMobileProps";

export function SideBar({ data }: NavMobileProps) {
  const [isOpen, setOpen] = useState(false)  

  function toggleMenu() {
    setOpen(!isOpen)
    const body = document.getElementsByTagName('body')

    if (!isOpen) {
      body[0].classList.add('overflow-hidden')
    } else {
      body[0].classList.remove('overflow-hidden')
    }
  }

  return (
    <div>
      <div onClick={toggleMenu}>
        <MenuHamburguerIcon isOpen={isOpen} />
      </div>
      <div className={`${isOpen ? 'left-0' : 'left-[-100vw]'} absolute duration-200 top-0 h-screen w-fit`}>
        <div id="blur" className="bg-black/50 w-[100vw] absolute inset-0 h-screen z-[1] " onClick={toggleMenu} />cls
        <div className="z-[1] bg-background w-[70vw] h-screen absolute  left-0 top-0">
          <div className="cursor-pointer flex justify-end p-2 duration-300" onClick={toggleMenu}>
            <Image src={"/img/closeIcon.svg"} alt={"botão para fechar o menu"} width={20} height={20} />
          </div>
          <ul className="flex flex-col p-5 pr-0 gap-5" >
            {data.map((item, index) => (
              <li key={index} onClick={toggleMenu} className="flex items-center">
                <StyledMobileLink Icon={item.icon} href={item.path} title={item.title}  />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


