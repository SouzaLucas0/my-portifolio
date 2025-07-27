
import { IconAbout } from "./mobile/icon/iconAbout";
import { IconHome } from "./mobile/icon/iconHome";
import { PATH_PAGE } from "@/src/routes/paths";
import { IconProjects } from "./mobile/icon/iconProjects";
import { IconPhone } from "./mobile/icon/iconPhone";


export const navConfig = [
    {
        title: "Home",
        path: PATH_PAGE.home,
        icon: IconHome 
    },
    {
        title: "Sobre",
        path: PATH_PAGE.about,
        icon: IconAbout 
    },
    {
        title: "Projetos",
        path: PATH_PAGE.projects,
        icon: IconProjects
    },
    {
        title: "Contato",
        path: PATH_PAGE.contact,
        icon: IconPhone
    },
]