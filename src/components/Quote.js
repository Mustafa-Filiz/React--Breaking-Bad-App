import React from 'react';

function Quote({ quote }) {
    return (
        <div style={{ padding: '10px 0' }}>
                <q>{quote.quote}</q> <strong>{quote.author}</strong>
        </div>
    );
}

export default Quote;
