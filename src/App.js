import './App.css';
import React from 'react';
import ClientsProvider from './Components/Contexts/ClientsContext';
import Home from './Components/Home/Home';


function App() {

    return (

        <>

          <ClientsProvider>

            <h1>Scheduling Control</h1>
            <Home/>

            

          </ClientsProvider>


        </>


    
    );
}

export default App;
