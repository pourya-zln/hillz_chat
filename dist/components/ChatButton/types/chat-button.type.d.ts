import { HTMLAttributes, ReactElement } from "react";
export interface ChatButtonProps extends HTMLAttributes<HTMLButtonElement> {
    icon?: ReactElement;
    showTimes: boolean;
}
