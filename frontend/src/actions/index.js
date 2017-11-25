// @flow
import fetch from 'better-fetch'

export type SetName = {
    type : "SET_NAME",
    name : string
}

export type JoinGame = {
    type : "JOIN_GAME",
    id : string
}

export type StartingGame = {
    type : "STARTING_GAME"
}

export type StartedGame = {
    type : "STARTED_GAME",
    id : string
}

export type StartingGameFailed = {
    type : "STARTING_GAME_FAILED"
}

export type Action = 
    | SetName
    | JoinGame
    | StartingGame
    | StartedGame
    | StartingGameFailed

export type User = {
    +name : string
}

export type Game = {
    +id : string,
    +players : Array<User>
}

export type State = {
    +user : ?User,
    +game : ?Game
};

type GetState = () => State;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;



export const startGame = () : ThunkAction => async (dispatch : Dispatch, getState : GetState) => {
    dispatch({ type : "STARTING_GAME"})
    const response = await fetch("/games", { method : "POST"})
    
    if(!response.ok) {
        return dispatch({ type : "STARTING_GAME_FAILED"})
    }
    
    const body = response.json();

    return dispatch({ type : "STARTED_GAME", id : body.id})
}

export const setName = (name : string) : SetName => ({
    type : "SET_NAME",
    name
})

export const joinGame = (id : string) : JoinGame => ({
    type : "JOIN_GAME",
    id
})
