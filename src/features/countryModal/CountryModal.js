import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountryModal, loadCountry, selectCountryModalLoadStatus, selectCountryFailedStatus } from "./countryModalSlice";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLandmarkFlag, faLanguage, faMoneyBill, faPen, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const CountryModal = (props) => {
    const {show, modalTitle, onClose} = props;

    const countryProfile = useSelector(selectCountryModal);
    const loadStatus = useSelector(selectCountryModalLoadStatus);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (show === true) {
            const countryData = modalTitle.toLowerCase();
            dispatch(loadCountry(countryData));

        };
        
    }, [show]);

    console.log(countryProfile);
    return (
        <Modal size="lg" show={show} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header data-bs-theme="dark" closeButton className="bg-dark text-white">
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white">
            <Table striped hover variant="dark">
                        <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                </td>
                                <td>
                                    Official Name
                                </td>
                                <td>
                                    {countryProfile.length !== 0 && countryProfile ? countryProfile[0].name.official :  ""}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faLandmarkFlag}></FontAwesomeIcon>
                                </td>
                                <td>
                                    Capital City
                                </td>
                                <td>
                                    {countryProfile.length !== 0 && countryProfile ? countryProfile[0].capital.map((city) => <li key={city}>{city}</li>) :  ""}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                                </td>
                                <td> Population
                                </td>
                                <td>
                                    {countryProfile.length !== 0 && countryProfile ? countryProfile[0].population.toLocaleString() :  ""}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                                </td>
                                <td>
                                    Langauges
                                </td>
                                <td>
                                {countryProfile.length !== 0 && countryProfile ? Object.entries(countryProfile[0].languages).map(([key, language]) => <li key={key}>{language}</li>) : "" }
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                    <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                </td>
                                <td>
                                    Continent
                                </td>
                                <td>
                                    {countryProfile.length !== 0 && countryProfile ? countryProfile[0].continents.map((continent) => <li key={continent}>{continent}</li>) :  ""}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                                </td>
                                <td>
                                    Currency
                                </td>
                                <td>
                                   {countryProfile.length !== 0 && countryProfile ? Object.entries(countryProfile[0].currencies).map(([key, currency]) => <li key={key}>{currency.name}</li>) : "" }
                                </td>
                            </tr>

                        </tbody>
                    </Table>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-white">
                <Button variant="primary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default CountryModal;
