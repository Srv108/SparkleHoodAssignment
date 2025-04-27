import ModalContext from "@/Context/modal"
import { useContext } from "react"

export const useIncidentModal = () => {
    return useContext(ModalContext);
}