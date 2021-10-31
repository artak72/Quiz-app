import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'


function ScorePage() {
  const score = useSelector((state) => state.score)

  const dispatch = useDispatch()


  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  return (
    <div>
      <h1>Thank You</h1>
      <h3>{score} / 10</h3>
      
      <Button variant="contained" onClick={settings}>Back to Home</Button>
    </div>
  )
}
export default ScorePage
