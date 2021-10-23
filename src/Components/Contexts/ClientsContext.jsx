import React, {createContext, useState} from 'react';

export const ClientsContext = createContext()

const ClientsProvider = ({children}) => {

    const [areaList, setAreaList] = useState(["Avalon", "Manly", "Cromer", "New Port"])
    const [clientList, setClientList] = useState([{name: 'Miller', area: "Avalon", address: '11 telegraph', interval: 30, lastVisit: '05/08/2021', visitList: [0,1,2,3,4,5]}, {name: 'Carol', area: "Manly", address: '14 warringah', interval: 15, lastVisit: '05/08/2021', visitList: [0,1,2,3,4,5]}, {name: 'Sally', area: "Cromer", address: '145 Terry', interval: 45, lastVisit: '05/08/2021', visitList: [0,1,2,3,4,5]}, {name: 'Cesare', area: "Cromer", address: '30 Victor rd', interval: 15, lastVisit: '05/09/2021', visitList: [0,1,2,3,4,5]}, {name: 'Peter', area: "Manly", address: '12 Richmond', interval: 14, lastVisit: '05/10/2021', visitList: [0,1,2,3,4,5]}])

    //const nova = [{area: 'Avalon', clients: [4]},{area: 'Manly'}, {area: 'Cromer'}]

   console.log(areaList)
   console.log(clientList)

    const addClient = (name, area, address, interval, date) => {

        const newClient = {
            name: name,
            area: area,
            address: address,
            interval: interval,
            lastVisit: date
        }

        const newClientList = [...clientList, newClient]
        setClientList(newClientList)
    }








    return (

        <ClientsContext.Provider value={{clientList, areaList, addClient}}>{children}</ClientsContext.Provider>
    )



}

export default ClientsProvider