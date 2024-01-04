import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Root = () => {
    return (
        <Container fluid className="vh-100 px-0 d-flex flex-column">
            <Outlet />
        </Container>
    )
};

export default Root;