import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Detail() {
    const { char_id } = useParams();
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_BASE_URL}/characters/${char_id}`)
            .then((res) => res.data)
            .then((data) => setDetails(data[0]))
            .finally(() => setIsLoading(false));
    }, [char_id]);

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {!isLoading && (
                <>
                    <img
                        src={details.img}
                        alt={details.name}
                        style={{ width: '50%' }}
                    />
                    <h4>{details.name} </h4>
                    <p>{details.birthday}</p>
                    <p>{details.nickname}</p>
                </>
            )}
        </div>
    );
}

export default Detail;
