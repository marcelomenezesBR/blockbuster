
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const MovieDetails = ( { movieData, posterUrl }) => {
    console.log("movieData is ", movieData);
    console.log("posterUrl is ", posterUrl);
    
    return (
            <><Card style={{ width: '50%' }}>
                <Card.Img variant="top" src={posterUrl} />
                <Card.Body>
                    <Card.Title>{movieData.Title}</Card.Title>
                    <Card.Text>{movieData.Year}</Card.Text>
                    <Card.Text>{movieData.Type}</Card.Text>
                    <Card.Text>{movieData.Rated}</Card.Text>
                    <Card.Text>{movieData.Released}</Card.Text>
                    <Card.Text>{movieData.Runtime}</Card.Text>
                    <Card.Text>{movieData.Genre}</Card.Text>
                    <Card.Text>{movieData.Director}</Card.Text>
                    <Card.Text>{movieData.Writer}</Card.Text>
                    <Card.Text>{movieData.Actors}</Card.Text>
                    <Card.Text>{movieData.Plot}</Card.Text>
                    <Card.Text>{movieData.Language}</Card.Text>
                    <Card.Text>{movieData.Country}</Card.Text>
                    <Card.Text>{movieData.Actors}</Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <Button variant="dark" href="/">Search again</Button>
                 </Card.Footer>
            </Card>
            </>
    )
}



export default MovieDetails;