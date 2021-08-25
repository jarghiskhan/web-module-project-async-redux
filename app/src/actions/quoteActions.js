import axios from "axios"

export const GET_QUOTES = "GET_QUOTES";


export async function getQuotes(dispatch, getState){
        axios.get("https://animechan.vercel.app/api/quotes")
        .then(res => {
            dispatch({type:GET_QUOTES, payload: res.data})
        })
    .catch(err=>{
        console.log(err)
    })
}