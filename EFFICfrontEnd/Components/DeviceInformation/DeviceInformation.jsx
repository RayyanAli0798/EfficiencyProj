import "./DeviceInformation.css"
import { useState, useEffect } from 'react'
import plusIcon from "../../../EFFICfrontEnd/src/assets/plusIcon.png"
import crossIcon from "../../../EFFICfrontEnd/src/assets/crossIcon.png"
import { UseInfo } from "../../src/Context.jsx"
import copyIcon from "../../../EFFICfrontEnd/src/assets/copyIcon.png"
import FormatDeviceInfo from "../ContextFormater/FormatDeviceInfo.jsx"

export default function DeviceInformation() {
    const [count, setCount] = useState(1)
    const { DeviceInfo, setDeviceInfo } = UseInfo();

    function clearDeviceInfo() {
        setCount(1)
        setDeviceInfo({})
    }

    return (
        <div className="Device-Information-container">

            <div className="Device-Information-Header">
                <h2 className="Device-Details-Title">Device Information</h2>
              
                <button className="Remove-Device-Button" onClick={() => clearDeviceInfo(setCount)}>
                    <img src={crossIcon} alt="Remove Device" className="Icon" />
                </button>

                <button type="button" onClick={() => navigator.clipboard.writeText(FormatDeviceInfo(DeviceInfo))}>
                    <img src={copyIcon} alt="Copy to Clipboard" className="Icon" />
                </button>




                <button className="Add-Device-Button" onClick={() => setCount(count + 1)}>
                    <img src={plusIcon} alt="Add Device" className="Icon" />
                </button>
            </div>



            <section>
                {Array.from({ length: count }, (_, i) => (
                    <DeviceDetails key={i} index={i} />
                ))}

            </section>
        </div>
    )
}

function DeviceDetails({ index }) {

    const [serialNumber, setSerialNumber] = useState("")
    const [modelNumber, setModelNumber] = useState("")
    const [firmwareVersion, setFirmwareVersion] = useState("")
    const { DeviceInfo, setDeviceInfo } = UseInfo({})

    function save(serial, model, firmware) {
        setDeviceInfo({
            ...DeviceInfo,
            [index]: { serialNumber: serial, modelNumber: model, firmwareVersion: firmware }
        });
    }

    useEffect(() => {
        if (!DeviceInfo[index]) {
            setSerialNumber("")
            setModelNumber("")
            setFirmwareVersion("")
        }
    }, [DeviceInfo, index])

    return (
        <form className="Device-Details">
            <input type="text" placeholder="Serial Number" value={DeviceInfo[index]?.serialNumber || ""}
                onChange={(e) => { setSerialNumber(e.target.value); save(e.target.value, modelNumber, firmwareVersion); }} />

            <input type="text" placeholder="Model Number" value={DeviceInfo[index]?.modelNumber || ""}
                onChange={(e) => { setModelNumber(e.target.value); save(serialNumber, e.target.value, firmwareVersion); }} />

            <input type="text" placeholder="Firmware Version" value={DeviceInfo[index]?.firmwareVersion || ""}
                onChange={(e) => { setFirmwareVersion(e.target.value); save(serialNumber, modelNumber, e.target.value); }} />
        </form>


    )
}

