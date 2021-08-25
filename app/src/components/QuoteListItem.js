import React from 'react';

const QuoteListItem = (props)=> {
  const {anime, character, quote} = props.quote;
  return(
  <div className="tile">
      <h3>Anime:{' '}{anime} </h3>
      <h4>Character:{' '} {character}</h4>
      <h4>Quote:</h4>
      <p>{quote}</p>
  </div>);
}

export default QuoteListItem;