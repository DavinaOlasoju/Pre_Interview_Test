import './App.css'
import Timetable from './pages/Timetable.jsx'
import AddNew from './pages/AddNew.jsx'
import StudyGuide from './pages/StudyGuide.jsx'
export function Navbar(){
    return(
        <nav className="nav">
            <a href="/">Timetable</a>
            <a href="/study-guide">Study Guide</a>
        </nav>
    )
}

function App() {

  let Page;

  switch (window.location.pathname) {
    case "/": 
      Page = Timetable 
      break
    case "/add-lecture": 
      Page = AddNew
      break
    case "/study-guide": 
      Page = StudyGuide
      break
    default: 
      Page = Timetable;
      break
  }

  return (
    <>
        <Navbar />
        <Page />
    </>
  );
}

export default App
