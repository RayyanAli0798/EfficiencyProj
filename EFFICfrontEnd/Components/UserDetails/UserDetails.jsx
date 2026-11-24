import "./UserDetails.css"
import { useState } from "react"
import { UseInfo } from "../../src/Context.jsx"

export default function UserDetails() {

  const { clientName, setClientName,companyName, setCompanyName, userType, setUserType } = UseInfo()

  return (
    <div className="User-Details-Container">
      <h2 className="User-Details-Title"> User Details </h2>
      <form className="User-Details">

        {/* name and company name input fields, and a dropdown for user type selection */}
        <input type="text" placeholder="Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
        <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="" hidden disabled>User Type</option>
          <option value="Installer">Installer</option>
          <option value="End User">End User</option>
        </select>

      </form>
    </div>
  )
}