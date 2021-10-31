import { useSelector } from 'react-redux'
import MainPage from './Components/MainPage'
import QuestionPage from './Components/QuestionPage'
import ScorePage from './Components/ScorePage'

import './App.css'

function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <QuestionPage />
  } else if (!questions.length) {
    component = <MainPage />
  } else {
    component = <ScorePage />
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  )
}

export default App
