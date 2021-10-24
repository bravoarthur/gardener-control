import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';

function Edit({handlePage}) {

    const {clientList, editPage, areaList, addNewClient, _handleChangeName} = useContext(ClientsContext)

    const modList = clientList.map(item => item)
    const index = modList.findIndex(item => item.name === editPage)
    
    const [name, setName] = useState(modList[index].name)
    const [area, setArea] = useState(modList[index].area)
    const [address, setAddress] = useState(modList[index].address)
    const [interval, setInterval] = useState(modList[index].interval)
    const lastVisit = modList[index].lastVisit
    const [visitList, setVisitList] = useState(modList[index].visitList)
    const [notes, setNotes] = useState(modList[index].notes)

    const oldName = modList[index].name

          
    const _handleSave = () => {

        addNewClient(name, area, address, interval, lastVisit, visitList, notes)
        
    }

    const _handleDeleteVisit = (indexVisit) => {

        let newVisitList = visitList
        
        newVisitList.splice(indexVisit, 1) 
        setVisitList(newVisitList)
        _handleSave()        
    }



    return (

        <div>

            <div>

                <li>Name: <input type="text" value={name} onChange={(event) => {                        
                        setName(event.target.value)
                        _handleChangeName(oldName, event.target.value)
                        }
                    
                }/></li>

                <li>area:
                    <select defaultValue={area} onChange={event => setArea(event.target.value)}>

                        {areaList.map((item, index) => 
                        <option value={item} key={index}>{item}</option>
                        )}

                    </select>
                               
                </li>

                <li>Address: <input type="text" value={address} onChange={(event) => setAddress(event.target.value)}/></li>

                <li>Interval: <input type="number" value={interval} onChange={(event) => setInterval(event.target.value)}/></li>

                <li>Last Visit: {lastVisit} </li>
                

            </div>

            <div>

                <h4>Visit List...</h4>
                {visitList.map((item, ind) => <li key={ind}>{item} <button onClick={() => _handleDeleteVisit(ind)}>Delete visit</button></li>)}

            </div>

            <div>

                <h4>Notes</h4>
                <textarea rows="5" cols="50" value={notes} onChange={(event) => setNotes(event.target.value)}/>
                
            </div>

            <button onClick={() => handlePage(0)}>Back Home</button>
            <button onClick={_handleSave}>Save Client</button>


        </div>

    )

}

export default Edit