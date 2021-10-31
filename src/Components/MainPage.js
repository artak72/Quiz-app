import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ButtonDate from './ButtonDate'
import { CircularProgress } from '@material-ui/core'





function MainPage() {
  const [options, setOptions] = useState(null)
  const loading = useSelector((state) => state.options.loading)

  const questionCategory = useSelector(
    (state) => state.options.question_category
  )



  const dispatch = useDispatch()

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`

    const handleLoadingChange = (value) => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value,
      })
    }

    handleLoadingChange(true)

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false)
        setOptions(response.trivia_categories)
      })
  }, [setOptions, dispatch])

  const handleCategoryChange = (event) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      question_category: event.target.value,
    })
  }



  if (!loading) {
    return (
      <div>
        <h1>Trivia App</h1>
        <div>
          
          <h2>Pick a category</h2>
          
          <select value={questionCategory} onChange={handleCategoryChange}>
        <option key={0} selected={true} hidden={true}>Category</option>
            {options &&
              options.length &&
              options.map((option) => (

                <option value={option.id} key={option.id}>
                  {option.name} 
                </option>
                
                
              ))}
          </select>
          
        </div>



        
        <ButtonDate text="Start"   />
      </div>
    )
  }

  return <CircularProgress />
}
export default MainPage
