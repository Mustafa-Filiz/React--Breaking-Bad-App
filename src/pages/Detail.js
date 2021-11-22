import React from 'react';
import { useParams } from 'react-router';

function Detail() {
    const { char_id } = useParams();
    return <div>Detail of {char_id}</div>;
}

export default Detail;
