import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/charactersSlice';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const status = useSelector((state) => state.characters.status);
    const error = useSelector((state) => state.characters.error);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCharacters());
        }
    }, [dispatch, status]);

    if (status === 'failed') {
        return <h3>{error}</h3>;
    }

    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {characters.map((character) => (
                    <div key={character.char_id}>
                        <Link to={`/char/${character.char_id}`}>
                            <img
                                src={character.img}
                                alt={character.name}
                                className="character"
                            />
                            <p>{character.name}</p>
                        </Link>
                    </div>
                ))}
            </Masonry>
            <div style={{ padding: '0 0 50px 0' }}>
                {status === 'loading' && <h3>Loading...</h3>}
                {hasNextPage && status !== 'loading' && (
                    <button onClick={() => dispatch(fetchCharacters(nextPage))}>
                        Load More ({nextPage})
                    </button>
                )}
                {!hasNextPage && <h3>End of characters...</h3>}
            </div>
        </div>
    );
}

export default Home;
