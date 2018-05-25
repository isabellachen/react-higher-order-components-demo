import { combineReducers } from 'redux'
import * as actions from '../actions'

const defaultState = []

const personal = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_PERSONAL_ITEM:
      return [
        ...state,
        action.payload
      ]
    default: return state
  }
}

const research = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_RESEARCH_ITEM:
      return [
        ...state,
        action.payload
      ]
    default: return state
  }
}

const defense = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_DEFENSE_ITEM:
      return [
        ...state,
        action.payload
      ]
    default: return state
  }
}

const construction = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_CONSTRUCTION_ITEM:
      return [
        ...state,
        action.payload
      ]
    default: return state
  }
}

export default combineReducers({
  personal,
  research,
  defense,
  construction
})