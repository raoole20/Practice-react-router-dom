import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';

function NewQuote(props) {

    const addQuoteHandler = quoteData => {

    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler}>
          
        </QuoteForm>
    )
}

export default NewQuote;