import React from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const createQuote = ({ authorName, quoteText }) => {
    const newQuote = { id: getNextId(), authorName, quoteText, apocryphal: false }
    dispatch({ type: CREATE_QUOTE, payload: newQuote })
  }
  const deleteQuote = id => {
    dispatch({ type: DELETE_QUOTE, payload: id })
  }
  const editQuoteAuthenticity = id => {
    dispatch({ type: EDIT_QUOTE_AUTHENTICITY, payload: id })
  }
  const setHighlightedQuote = id => {
    dispatch({ type: SET_HIGHLIGHTED_QUOTE, payload: id })
  }
  const toggleVisibility = () => {
    dispatch({ type: TOGGLE_VISIBILITY })
  }
  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
      />
      <QuoteForm
        createQuote={createQuote}
      />
    </div>
  )
}
