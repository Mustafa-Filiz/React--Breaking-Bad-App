import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/charactersSlice';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    if (error) {
        return <h3>{error}</h3>;
    }

    return (
        <div>
            <h1>Characters</h1>
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
                {isLoading && <h3>Loading...</h3>}
                {hasNextPage && !isLoading && (
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
