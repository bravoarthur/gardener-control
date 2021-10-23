import React, {createContext, useState} from 'react';

export const ClientsContext = createContext()

const ClientsProvider = ({children}) => {

    const [areaList, setAreaList] = useState(["Avalon", "Manly", "Cromer", "New Port"])

    const [clientList, setClientList] = useState([{name: 'Miller', area: "Avalon", address: '11 telegraph', interval: 30, lastVisit: '05/08/2021', visitList: [0,1,2,3,4,5]}, {name: 'Carol', area: "Manly", address: '14 warringah', interval: 15, lastVisit: '05/08/2021', visitList: [0,1,2,3,4,5]}, {name: 'Sally', area: "Cromer", address: '145 Terry', interval: 45, lastVisit: '05/08/2021', visitList: [0,1,2,3,4,5]}, {name: 'Cesare', area: "Cromer", address: '30 Victor rd', interval: 15, lastVisit: '05/09/2021', visitList: [0,1,2,3,4,5]}, {name: 'Peter', area: "Manly", address: '12 Richmond', interval: 14, lastVisit: '05/10/2021', visitList: [0,1,2,3,4,5]}])

    //const nova = [{area: 'Avalon', clients: [4]},{area: 'Manly'}, {area: 'Cromer'}]

   console.log(areaList)
   console.log(clientList)

    
    const addNewClient = (name, area, address, interval, date) => {

        const newDate = _handleNewDate(date)

        const newClient = {
            name: name,
            area: area,
            address: address,
            interval: interval,
            lastVisit: newDate,
            visitList: []
        }
        console.log(date)

        const newClientList = [...clientList, newClient]
        setClientList(newClientList)
        
    }



    const _handleTodayVisit = ((event) => {

        const clientCapture = event.target.parentElement.closest('tr').id
        const modList = clientList.map(item => item)
        const index = clientList.findIndex(item => item.name === clientCapture
        )

        
        modList[index].visitList.push(modList[index].lastVisit)

        const todayDate = _handleDateToday()
        modList[index].lastVisit = todayDate
                
        setClientList(modList)
        
    })








    return (

        <ClientsContext.Provider value={{clientList, areaList, addNewClient, _handleTodayVisit}}>{children}</ClientsContext.Provider>
    )



}

export default ClientsProvider





function _handleDateToday() {

    const lDate = new Date()
    lDate.setDate(lDate.getDate())

    const day = String(lDate.getDate()).padStart(2, '0');
    const month = String(lDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = lDate.getFullYear();
    var todayDate = `${day}/${month}/${year}`

    return todayDate

}

function _handleNewDate(date) {

    const lDate = new Date(date)
    lDate.setDate(lDate.getDate())

    const day = String(lDate.getDate()).padStart(2, '0');
    const month = String(lDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = lDate.getFullYear();
    var newDate = `${day}/${month}/${year}`
    
    return newDate

}