import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';

function ShowList() {


    const {areaList, clientList} = useContext(ClientsContext)

    const [intervalSelector, setIntervalSelector] = useState(7)

    const Thead = () => {

        return (

            <thead>
                                
                <tr>

                    <th>Client</th>
                    <th>Last Visit</th>
                    <th>Frequency</th>
                    <th>Next Visit</th>
                                    
                </tr>

            </thead>

        )
    }




    const _handleInterval = (event) => {

        setIntervalSelector(event.target.value)

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
                <input type="number" defaultValue={intervalSelector} id="intervalSelector" onChange={_handleInterval}/>
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
                                        
                                            <tr>

                                                <td>{it.name}</td>
                                                <td>{_handleLastVisit(it.lastVisit)}</td>
                                                <td>{it.interval}</td>
                                                <td>{_handleNextVisit(it.lastVisit, it.interval)}</td>
                                                                               
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






function _handleLastVisit(lastVisitDate) {

    const lDate = new Date(lastVisitDate)
    lDate.setDate(lDate.getDate())

    const day = String(lDate.getDate()).padStart(2, '0');
    const month = String(lDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = lDate.getFullYear();
    var lastVisit = `${day}/${month}/${year}`

    return lastVisit

}




function _handleNextVisit(lVisit, freq)  {

    const lastDate = new Date(lVisit)
    

    lastDate.setDate(lastDate.getDate() + Number(freq))
    console.log(lastDate)


    var dd = String(lastDate.getDate()).padStart(2, '0');
    var mm = String(lastDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = lastDate.getFullYear();
    var data = `${dd}/${mm}/${yyyy}`

    return data

    
}
