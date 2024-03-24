import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const MovieItem = ({ movie, handleMovieClick}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
                <Button variant="dark" onClick={() => handleMovieClick(movie.imdbID, movie.Poster)}>View Details</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieItem;