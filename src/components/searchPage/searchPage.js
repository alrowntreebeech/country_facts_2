import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountries, loadCountries, selectFailedSearch, selectLoadingSearch } from "./searchPageSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CountryModal from "../../features/countryModal/CountryModal";


const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        setShow(true);
        setModalTitle(event.target.value);
    };
    
    const dispatch = useDispatch();

    const countryResults = useSelector(selectCountries);
    const failedSearch = useSelector(selectFailedSearch);
    const loadingSearch = useSelector(selectLoadingSearch);


    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm("");
        dispatch(loadCountries(searchTerm));
    }

    const renderCountries = () => {
        const countryList = [];

        for (let i = 0; i < countryResults.length; i++) {
            if((i + 3) % 3 === 0) {
                countryList.push(
                    <Row className="my-3" key={i}>
                        <Col md={4} className="d-flex justify-content-center my-3">
                            <Card className="w-75">
                               <Card.Img variant="top" style={{height: "230px"}} className="border-bottom border-black" src={countryResults[i].flags.png} alt={countryResults[i].flags.alt} />
                               <Card.Body className="text-center">
                                    <Card.Title>{countryResults[i].name.common}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-dark" onClick={handleShow} value={countryResults[i].name.common}>More Info</Button>
                               </Card.Body>
                            </Card>
                        </Col>
                        {countryResults[i + 1] ? (
                            <Col md={4} className="d-flex justify-content-center my-3">
                                <Card className="w-75">
                                <Card.Img variant="top" style={{height: "230px"}}  className="border-bottom border-black" src={countryResults[i + 1].flags.png} alt={countryResults[i + 1].flags.alt} />
                                    <Card.Body className="text-center">
                                        <Card.Title>{countryResults[i + 1].name.common}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="outline-dark" onClick={handleShow} value={countryResults[i + 1].name.common}>More Info</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ) : null}
                        {countryResults[i + 2] ? (
                            <Col md={4} className="d-flex justify-content-center my-3">
                                <Card className="w-75">
                                    <Card.Img variant="top"  style={{height: "230px"}} className="border-bottom border-black" src={countryResults[i + 2].flags.png} alt={countryResults[i + 2].flags.alt} />
                                    <Card.Body className="text-center">
                                        <Card.Title>{countryResults[i + 2].name.common}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="outline-dark" onClick={handleShow} value={countryResults[i + 2].name.common}>More Info</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ) : null}
                    </Row>
                )
            }
        }
        return countryList;
    }

    return(
        <Container fluid className="bg-black flex-fill">
            <Row>
                <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <Form.Group className="my-3 w-25">
                        <Form.Control type="text" id="country" onChange={(e) => setSearchTerm(e.currentTarget.value)} placeholder="Enter Country Name" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="submit">
                        Search
                    </Button>
                </Form>
            </Row>

            {loadingSearch ? <h2>Loading Page....</h2> : null}
            {failedSearch ? (
                <Card style={{width: '25rem'}} className="my-3 mx-auto">
                    <Card.Img variant="top" style={{height: "230px"}} className="border-bottom border-black" src={require("../assets/jolly_roger.png")} alt={"Jolly Roger Flag"} />
                    <Card.Body className="text-center">
                        <Card.Title>Error Message</Card.Title>
                            <Card.Text>
                                Sorry. Either couldn't find a result for typed in country or there is a connection problem :(
                            </Card.Text>
                    </Card.Body>

                </Card>
            ) : (
               renderCountries()
            )}
            <CountryModal show={show} modalTitle={modalTitle} onClose={handleClose}/> 
        </Container>
    )
}

export default SearchPage;