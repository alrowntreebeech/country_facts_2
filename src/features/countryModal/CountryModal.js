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

    /*
    useEffect(() => {
        const countryData = countryName.toLowerCase();
        dispatch(loadCountry(countryData));
    }, [countryName, dispatch]);
    */

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
                                    
                                </td>
                                <td>
                                    Official Name
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                </td>
                                <td>
                                    Capital City
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                </td>
                                <td> Population
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                     
                                </td>
                                <td>
                                    Langauges
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                    
                                </td>
                                <td>
                                    Continent
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                </td>
                                <td>
                                    Currency
                                </td>
                                <td>
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
