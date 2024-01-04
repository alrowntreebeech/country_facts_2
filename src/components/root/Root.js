import React from "react";
import NavigationBar from "../../features/navigation/NavigationBar";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Root = () => {
    return (
        <Container fluid className="vh-100 px-0 d-flex flex-column">
            <NavigationBar />
            <Outlet />
        </Container>
    )
};

export default Root;