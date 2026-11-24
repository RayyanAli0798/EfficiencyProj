import './App.css'
import UserDetails from '../Components/UserDetails/UserDetails.jsx'
import DeviceInformation from "../Components/DeviceInformation/DeviceInformation.jsx"
import { UseInfo } from '../src/Context.jsx';

function App() {


  return (
    <>
      <main className="main">
        <UserDetails />
        <hr className="divider" />
        <DeviceInformation />
        <hr className="divider" />
        <NotesSection />
      </main>
    </>

  )
}

export default App


function NotesSection() {
  const { CaseNotes, setCaseNotes} = UseInfo()
  console.log(CaseNotes)

  return (
    <div className="notes-container">
      <h2 className="Notes-Title"> Notes </h2>
      <textarea className="notes-textarea" onChange={(e) => setCaseNotes(e.target.value)} value={CaseNotes} />
    </div>
  )
}