import "./App.css";
import React from "react";
import ClientsProvider from "./Components/Contexts/ClientsContext";
import Home from "./Components/Home/Home";
import { Container } from "@material-ui/core";
import { H1 } from "./Components/UI";

function App() {
    return (
        <Container>
            <ClientsProvider>
                <H1>Scheduling Control</H1>
                <Home />
            </ClientsProvider>
        </Container>
    );
}

export default App;
