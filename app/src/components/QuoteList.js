import React from "react";
import { connect } from "react-redux";
import QuoteListItem from "./QuoteListItem";
import { getQuotes } from "../actions/quoteActions";

const QuoteList = (props)=>{
    const quotes = props.quotes;
    console.log(props.quotes)
    return(
        <div  className="cards">
            <h2>Quotes</h2>
                {
                    quotes.map((quote, index)=><QuoteListItem key={index} quote={quote}/>)
                }
 
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        quotes: state.quotes
    }
}


export default connect(mapStateToProps, {}) (QuoteList);