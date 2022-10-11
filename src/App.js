import { students } from "./data"
import './App.css'
import Student from './components/Student'

function App() {

  return (
    <>
    <h1>Students</h1>

    {students.map((student, idx) => 
      <Student key={idx} student={student} />
    )}
    
    </>
  )
  
}

export default App

