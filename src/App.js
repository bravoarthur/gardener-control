import './App.css';
import React from 'react';
import ClientsProvider from './Components/Contexts/ClientsContext';
import Home from './Components/Home/Home';
import {Container} from "@material-ui/core"


function App() {

    return (

        <Container>

          <ClientsProvider>

            <h1>Scheduling Control</h1>
            <Home/>

            

          </ClientsProvider>


        </Container>


    
    );
}

export default App;
