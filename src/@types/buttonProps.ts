import { ReactNode } from "react";

export interface buttonProps {
    title: string,
    path: string,
    children?: ReactNode,
    icon?: `hidden` | `flex`,
    bgicon?: `strongOrange` | `white` | string,
    className: string
}