import React from "react";
import Container from "react-bootstrap/Container";
import { Canvas } from '@react-three/fiber';

const HomePage = () => {
    return (
        <Container fluid className="bg-black flex-fill">
            <Canvas>
                <mesh>
                    <sphereGeometry  />
                    <meshBasicMaterial />
                </mesh>
            </Canvas>
        </Container>
    )
};

export default HomePage;