import { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {

    const [ openModalFlag, setOpenModalFlag ] = useState(false);

    return (
        <ModalContext.Provider value={{ openModalFlag, setOpenModalFlag }}>
            { children }
        </ModalContext.Provider>
    )
}

export default ModalContext;
