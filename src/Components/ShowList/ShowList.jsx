import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';

function ShowList({handlePage}) {


    const {areaList, clientList, _handleTodayVisit, _handleSelectedDate, setEditPage} = useContext(ClientsContext)

    const [intervalSelector, setIntervalSelector] = useState(7)

    const Thead = () => {

        return (

            <thead>
                                
                <tr>

                    <th>Client</th>
                    <th>Last Visit</th>
                    <th>Frequency</th>
                    <th>Next Visit</th>
                    <th>Include Visit Today</th>
                    <th>Include Selected Date</th>
                    <th>More Info / Edit</th>
                                    
                </tr>

            </thead>

        )
    }




    const _handleInterval = (event) => {

        setIntervalSelector(event.target.value)

    }

    const _handleEdit = (event) => {

        const clientCapture = event.target.parentElement.closest('tr').id
        setEditPage(clientCapture)
        handlePage(2)
    }


    /*
    useEffect(() => {

        if(!intervalSelector){

            setIntervalSelector(document.getElementById("intervalSelector").value)
            

        }
    }, [intervalSelector])
    console.log(intervalSelector)

    */
  

    return (

        <>

            <label>Select time Interval
                <input type="number" defaultValue={intervalSelector} id="intervalSelector" min={1} onChange={_handleInterval}/>
            </label>

          
            {areaList.map((item, index) => {

                const areaClients = clientList.filter((client) => {

                    if(client.area === item) {
                        return client
                    } else {
                        return ""
                    }
                })
                
                                        
                return(

                    <div key={index}>
                    
                        <h4>{item}</h4>                        
                        
                        <table>

                            <Thead/>
                        
                            {areaClients.map((it, ind) => {

                                return (

                                    <tbody key={ind}>
                                        
                                            <tr id={it.name}>

                                                <td>{it.name}</td>
                                                <td>{it.lastVisit}</td>
                                                <td>{it.interval}</td>
                                                <td>{_handleNextVisit(it.lastVisit, it.interval)}</td>
                                                <td><button onClick={_handleTodayVisit}>Visited Today</button></td>
                                                <td><input type="date" onChange={_handleSelectedDate}/></td>
                                                <td><button onClick={_handleEdit}>Edit</button></td>
                                                                               
                                            </tr>

                                    </tbody>

                                )

                            })}

                        </table>

                    </div>

                    )

                })}


        </>
    )

}

export default ShowList



function _handleNextVisit(lVisit, freq)  {

    const day = lVisit.slice(0,2)
    const month = lVisit.slice(3,5)
    const year = lVisit.slice(6,10)
    
    const date = `${year}/${month}/${day}`
    
    const lastDate = new Date(date)
    lastDate.setDate(lastDate.getDate() + Number(freq))
    

    var dd = String(lastDate.getDate()).padStart(2, '0');
    var mm = String(lastDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = lastDate.getFullYear();
    var data = `${dd}/${mm}/${yyyy}`
    

    return data

    
}
