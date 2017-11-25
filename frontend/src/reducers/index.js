
// @flow
import { combineReducers } from 'redux'
import type {Action, StartGame, JoinGame, SetName, State } from '../actions'



export default (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_NAME": return { ...state, user : { name : action.name } };
      case "START_GAME": return state; // todo: thunk
      case "JOIN_GAME": return state; // todo: thunk
      default:
        (action: empty);
        return state;
    }
  }
