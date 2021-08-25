import { GET_QUOTES, SAVE_QUOTE } from "../actions/quoteActions";


export const initialState = {
    quotes: [],
    savedQuotes : [],
}

export const quotesReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_QUOTES:{
            console.log("get quotes hit")
            return{
                ...state,
                quotes:action.payload
            }
        }
        default:
            return state
    }
}