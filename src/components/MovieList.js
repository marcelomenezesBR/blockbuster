import MovieItem from "./Movieitem";
import './Gallery.css';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

const MovieList = ({ movies, onMovieSelect }) => {

    const [numItems, setNumItems] = useState('5');
    const [active, setActive] = useState(1);

    const handleChange = (event) => {
        setNumItems(event.target.value);
        setActive(1);
    }


    const handleMovieClick = (imdbId, posterUrl) => {
        console.log(imdbId)
        onMovieSelect(imdbId, posterUrl);
    }


    const handlePageChange = (pageNumber) => {
        setActive(pageNumber);
        console.log(active)
    }

    let items = [];
    console.log("total: length: " + movies.length);
    console.log("num items to display:" + numItems);
    console.log('active:' + active);
    for (let number = 1; number <= movies.length / numItems; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const pagedMovies = movies.slice((active - 1) * numItems, (active) * numItems);

    if (pagedMovies.length > 0) {
        return (
            <><Form className="mb-4">
                <Row>
                <Col md="auto">
                    <Form.Label>Items per page:</Form.Label>
                </Col>
                <Col md="auto">
                <Form.Select name="numItems" id="numItems" value={numItems} onChange={handleChange}>
                    <option value="5" >5</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                </Form.Select>
                </Col>
                <Col md="auto">
                <div>
                    <Pagination size="sm">{items}</Pagination>
                </div>

                </Col>
                </Row>
<Row><Col>
                <div className="gallery">
                    {pagedMovies.map((movie) => (
                        <>
                           <MovieItem key={movie.imdbID} movie={movie} handleMovieClick={handleMovieClick} />
                           {/* <br/> 
                                <Button variant="primary" onClick={() => handleMovieClick(movie.imdbID, movie.Poster)}>View movie</Button>
                           </p> */}
                        </>
                    )
                    )
                    }
                </div >
</Col>                </Row>
                </Form></>
        )
    }

}

export default MovieList;