// @flow
export type SetName = {
    type : "SET_NAME",
    name : string
}

export type JoinGame = {
    type : "JOIN_GAME",
    gameId : string,
    name : string
}

export type StartingGame = {
    type : "STARTING_GAME"
}

export type StartedGame = {
    type : "STARTED_GAME",
    id : string,
    playerId : string
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


const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
}


export const startGame = (name : string) : ThunkAction => async (dispatch : Dispatch, getState : GetState) => {
    dispatch({ type : "STARTING_GAME"})
    const response = await fetch("/game", { method : "POST", headers, body : JSON.stringify({ player_name : name })})
    
    if(!response.ok) {
        return dispatch({ type : "STARTING_GAME_FAILED"})
    }
    
    const body = await response.json();

    return dispatch({ type : "STARTED_GAME", id : body.game.id, playerId : body.player_id})
}

export const setName = (name : string) : SetName => ({
    type : "SET_NAME",
    name
})

export const joinGame = (gameId : string, name : string) : JoinGame => ({
    type : "JOIN_GAME",
    gameId,
    name
})
