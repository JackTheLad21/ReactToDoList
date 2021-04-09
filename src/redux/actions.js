import { ADD_TO_DO, REMOVE_TO_DO, EDIT_TO_DO, EDIT_STATE } from "./actionTypes";

export const addToDo = (value) => ({
    type: ADD_TO_DO,
        payload: value
})

export const removeToDo = (value) => ({
    type:  REMOVE_TO_DO,
        payload: value
})

export const editToDo = (value, id) => ({
    type:  EDIT_TO_DO,
    payload: {value, id}
})

export const editState = ( id) => ({
    type:  EDIT_STATE,
    payload: { id}
})