import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';


function AddClient({handlePage}) {

    const {areaList, addNewClient, clientList} = useContext(ClientsContext)

    const [name, setName] = useState()
    const [area, setArea] = useState()
    const [address, setAddress] = useState()
    const [interval, setInterval] = useState()
    const [date, setDate] = useState()
    const visitList = []
    const [notes, setNotes] = useState()

    const _handleClientValid = (event) => {

        const nameValid = event.target.value
        
        const indexValid = clientList.findIndex(item => item.name === nameValid)
        
        if(indexValid >= 0) {
            alert("This client alredy exists")
            const inputName = document.getElementById("nameValid")
            inputName.value = ''
            }
    }

    
   
    return(

        <div>
    
            <form onSubmit={event => {
                event.preventDefault()
                addNewClient(name, area, address, interval, date, visitList, notes)
                handlePage(0)
                            
            }}>

            
                <select defaultValue="" required onChange={event => setArea(event.target.value)}>

                    <option value="" disabled hidden>Select the Area</option>
                    
                        {areaList.map((item, index) => 
                            <option value={item} key={index}>{item}</option>
                        )}

                </select>

                <input type="text" placeholder='Name...' id="nameValid"  required onChange={event => setName(event.target.value)} onBlur={_handleClientValid}/>

                <input type="text" placeholder="address..." required onChange={event => setAddress(event.target.value)}/>

                <input type="number" placeholder='Interval...' required min='1' onChange={event => setInterval(event.target.value)}/>

                <input type="date" placeholder="dd-mm-yyyy" required onChange={event => setDate(event.target.value)}/>

                <input type="text" placeholder="Notes" onChange={event => setNotes(event.target.value)}/>

                <button type='submit'>Add Client</button>
                            

            </form>

            <button onClick={()=>handlePage(0)}>Back home</button>

        </div>


    )

}

export default AddClient

