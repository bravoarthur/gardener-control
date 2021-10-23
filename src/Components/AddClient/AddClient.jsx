import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';


function AddClient() {

    const {areaList, addClient} = useContext(ClientsContext)

    const [name, setName] = useState()
    const [area, setArea] = useState()
    const [address, setAddress] = useState()
    const [interval, setInterval] = useState()
    const [date, setDate] = useState()

    
   
    return(

        <form onSubmit={event => {
            event.preventDefault()
            addClient(name, area, address, interval, date)

            
        }}>
        
            <select defaultValue="" required onChange={event => setArea(event.target.value)}>

                <option value="" disabled hidden>Select the Area</option>
                
                    {areaList.map((item, index) => 
                        <option value={item} key={index}>{item}</option>
                    )}

            </select>

            <input type="text" placeholder='Name...' required onChange={event => setName(event.target.value)}/>

            <input type="text" placeholder="address..." required onChange={event => setAddress(event.target.value)}/>

            <input type="number" placeholder='Interval...' required min='1' onChange={event => setInterval(event.target.value)}/>

            <input type="date" placeholder="dd-mm-yyyy" required onChange={event => setDate(event.target.value)}/>

            <button type='submit'>Add Client</button>


            

        </form>

    )

}

export default AddClient

