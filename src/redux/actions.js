import { ADD_TO_DO, REMOVE_TO_DO, EDIT_TO_DO } from "./actionTypes";

export const addToDo = (value) => ({
    type: ADD_TO_DO,
        payload: value
})

export const removeToDo = (value) => ({
    type:  REMOVE_TO_DO,
        payload: value
})

export const editToDo = (value) => ({
    type:  EDIT_TO_DO,
    payload: value
})