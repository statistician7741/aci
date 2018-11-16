import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  title: "Ringkasan Cuti",
  light: false,
  count: 0
}

export const actionTypes = {
  CHANGE_PAGE_TITLE: 'CHANGE_PAGE_TITLE'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAGE_TITLE:
      return Object.assign({}, state, {
        title: action.title,
      })
    default: return state
  }
}

// ACTIONS
export const setPageTitle = ( newTitle ) => dispatch => {
  return dispatch({ type: actionTypes.CHANGE_PAGE_TITLE, title: newTitle || "BPS Kab. Kolaka" })
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
