import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Quote from '../components/Quote';
import {
    errorSelector,
    fetchQuotes,
    quotesSelector,
    statusSelector,
} from '../redux/quotesSlice';

function Quotes() {
    const dispatch = useDispatch();
    const quotes = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    console.log(quotes);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchQuotes());
        }
    }, [dispatch, status]);

    if (error) {
        return <h3>{error}</h3>;
    }

    return (
        <div style={{ textAlign: 'left', padding: '0 20px' }}>
            <h1>Quotes</h1>
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'succeeded' &&
                quotes.map((quote) => (
                    <Quote key={quote.quote_id} quote={quote} />
                ))}
            {status === 'succeeded' && (
                <div style={{ textAlign: 'center' }}>
                    {quotes.length} quotes
                </div>
            )}
        </div>
    );
}

export default Quotes;
