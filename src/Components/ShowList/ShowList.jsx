import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';
import { InputDate, InputNumberEdit, Span, Table, Tbody, Td, Th, Tr } from '../UI';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import EditIcon from '@material-ui/icons/Edit'






function ShowList({handlePage}) {

    
    const {areaList, clientList, _handleTodayVisit, _handleSelectedDate, setEditPage} = useContext(ClientsContext)

    const [intervalSelector, setIntervalSelector] = useState(0)

    const THead = () => {

        return (

            <thead>
                                
                <Tr>

                    <Th>Client</Th>
                    <Th>Last Visit</Th>
                    <Th>Frequency</Th>
                    <Th>Next Visit</Th>
                    <Th>Include Visit Today</Th>
                    <Th>Include Selected Date</Th>
                    <Th>More Info / Edit</Th>
                                    
                </Tr>

            </thead>

        )
    }




    const _handleInterval = (event) => {

        console.log(`novo state ${event.target.value}`)
        setIntervalSelector(event.target.value)
        
    }

    const _handleEdit = (event) => {

        const clientCapture = event.target.parentElement.closest('Tr').id
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

        <Span>

            <div className='divSelectInterval'>
               
                <label>Select custom interval
                    
                    <InputNumberEdit className='inputViewInterval' label='Select' id="intervalSelector" type="number" min={0} defaultValue='0' onChange={_handleInterval} />
                    
                </label>

            </div>

          
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
                        
                        <Table>

                            <THead/>

                            <Tbody>
                        
                                {areaClients.map((it, ind) => {

                                    return (
                                                                     
                                            <Tr className={_handleSelectClass(it.lastVisit, it.interval, intervalSelector)} id={it.name} key={ind}>

                                                <Td>{it.name}</Td>
                                                <Td>{it.lastVisit}</Td>
                                                <Td>{it.interval}</Td>
                                                <Td>{_handleNextVisit(it.lastVisit, it.interval)}</Td>
                                                <Td > <CheckCircleIcon className='btnToday' onClick={_handleTodayVisit}>Visited Today</CheckCircleIcon></Td>
                                                <Td><InputDate type="date" size="small" onChange={_handleSelectedDate}/></Td>
                                                <Td><EditIcon className='btnToday' onClick={_handleEdit}></EditIcon></Td>
                                                
                                                
                                                
                                                                      
                                            </Tr>
                                    
                                    )

                                })}

                            </Tbody>

                        </Table>

                    </div>

                    )

                })}


        </Span>
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


function _handleClassDate (dateClass, freq) {

    const day = dateClass.slice(0,2)
    const month = dateClass.slice(3,5)
    const year = dateClass.slice(6,10)
    const date = `${year}/${month}/${day}`

    const convDate = new Date(date)
    convDate.setDate(convDate.getDate() + Number(freq))
    const today = new Date()

    
    const diff = (today.getTime() - convDate.getTime()); // Subtrai uma data pela outra
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    
   
    if(days <= 0 && days >= -7){
        return 'week'
    } else if(days > 0) {
        return 'late'
    }else if(days < -7) {
        return''
    }

}

function _handleClassDateSelector (dateClass, freq, intervalSelec) {

    const day = dateClass.slice(0,2)
    const month = dateClass.slice(3,5)
    const year = dateClass.slice(6,10)
    const date = `${year}/${month}/${day}`

    const convDate = new Date(date)
    convDate.setDate(convDate.getDate() + Number(freq))
    const today = new Date()

    
    const diff = (today.getTime() - convDate.getTime()); // Subtrai uma data pela outra
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    
        console.log(days)
   
    if(days < -(intervalSelec)){
        console.log(intervalSelec)
        return 'hiddenItem'
    } else if(days >= 0) {
        console.log(intervalSelec)
        return''
    } 

}

function _handleSelectClass(lastVisitDate, clientInterval, intervalSel) {
            

    if (Number(intervalSel) === 0) {
        
        return _handleClassDate(lastVisitDate, clientInterval)

    } else {
        
        return _handleClassDateSelector(lastVisitDate, clientInterval, intervalSel)
    }
}

