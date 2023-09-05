"use client"
import { createContext, useContext, useState } from "react";
const ModalContext = createContext({})

export function useModalStatus(){
    return useContext(ModalContext)
}
export default function StatusProvider({children} : {
    children: React.ReactNode
}) {

    const [modalOpen, setModalOpen] = useState(false)

    return <ModalContext.Provider value = {{modalOpen, setModalOpen}} >
        {children}
    </ModalContext.Provider>
}