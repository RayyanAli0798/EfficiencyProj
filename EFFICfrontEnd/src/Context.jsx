import { useState, createContext, useContext } from "react";

export const InfoContext = createContext();

export function InfoProvider({ children }) {

    //Info gathering
    const [clientName, setClientName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [userType, setUserType] = useState("")

    // Device Information
    const [DeviceInfo, setDeviceInfo] = useState({})

    // Case information
    const [CaseNotes, setCaseNotes] = useState("")


    return (
        <InfoContext.Provider value={{ clientName, setClientName, companyName, setCompanyName, userType, setUserType, DeviceInfo, setDeviceInfo, CaseNotes, setCaseNotes }}>
            {children}
        </InfoContext.Provider>
    )
}

export function UseInfo() {
    return useContext(InfoContext)
}