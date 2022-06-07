import { Dispatch, SetStateAction } from "react";
export interface ChatLeadProps {
    setShowLead: Dispatch<SetStateAction<boolean>>;
    scrollToBottom: Function;
}
