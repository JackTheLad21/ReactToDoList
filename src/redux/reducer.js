import { ADD_TO_DO, REMOVE_TO_DO, EDIT_TO_DO } from "./actionTypes";

const initialState = {
    toDoList: []
}

export default function(state = initialState, action) {
    switch(action.type){

        case ADD_TO_DO:
            return{
                ...state,
                toDoList: [
                ...state.toDoList,
                action.payload
                ]                    
            }

        case REMOVE_TO_DO:
            return {
                        ...state,
                        toDoList: state.toDoList.filter(x => x.id !== action.payload)
                    }

        case EDIT_TO_DO:
            return{
                ...state,
                toDoList: state.toDoList.map(curr =>{
                    if (curr.id === action.payload.id) {
                        curr.state = action.payload.stateChange
                    }
                })           
            }

        case EDIT_STATE:
            return {
                ...state,
                toDoList: state.toDoList.map(curr.progress)
            }

                
        default: 
            return state
    }
}