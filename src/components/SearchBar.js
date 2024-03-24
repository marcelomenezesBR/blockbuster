import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'; 
import Button from "react-bootstrap/Button";




const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [year, setYear] = useState('Any');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm, year);
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);

    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const currYear = (new Date()).getFullYear();
    const years = Array.from(new Array(120), (val, index) => currYear - index);

    return (
        <Form className="bg-secondary p-3  mt-3 mb-3" onSubmit={handleSubmit}>
            <Row>
                <Col md="auto" className="bg-dark text-white">
                    <Form.Label>Search Movies</Form.Label>
                </Col>
                <Col md="auto">
                    <Form.Control name="searchTerm" type="text" placeholder="Search Movies" value={searchTerm} onChange={handleChange} />
                </Col>
            </Row>
            <Row>
                <Col md="auto" className="bg-dark text-white">
                    <Form.Label >Year of Release</Form.Label>
                </Col>
                <Col md="auto">
                    <Form.Select size="sm" width="100px" value={year} name="year" placeholder="Release Year" onChange={handleYearChange}>
                        <option value="Any">Any year</option>
                        {
                            years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col md="span:true">
                    <Button variant="btn btn-dark text-center" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}


export default SearchBar;