import React, { createContext, useState } from "react";

export const ClientsContext = createContext();

const ClientsProvider = ({ children }) => {
    const [areaList, setAreaList] = useState([
        "Avalon",
        "Manly",
        "Cromer",
        "New Port"
    ]);

    const [clientList, setClientList] = useState([
        {
            name: "Miller",
            area: "Avalon",
            address: "11 telegraph",
            interval: 30,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        },
        {
            name: "Karen",
            area: "Avalon",
            address: "11 telegraph",
            interval: 30,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        },
        {
            name: "Jason",
            area: "Avalon",
            address: "11 telegraph",
            interval: 30,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        },
        {
            name: "James",
            area: "Avalon",
            address: "11 telegraph",
            interval: 30,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        },
        {
            name: "Carol",
            area: "Manly",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Mary",
            area: "Manly",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Tony",
            area: "Manly",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Isaac",
            area: "Manly",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Sally",
            area: "Cromer",
            address: "145 Terry",
            interval: 45,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        },
        {
            name: "Cesare",
            area: "Cromer",
            address: "30 Victor rd",
            interval: 15,
            lastVisit: "05/09/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        },
        {
            name: "7 howard st",
            area: "New Port",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Geoff",
            area: "New Port",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Ken",
            area: "New Port",
            address: "14 warringah",
            interval: 15,
            lastVisit: "05/08/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Once a Month - Budget $400"
        },
        {
            name: "Peter",
            area: "Manly",
            address: "12 Richmond",
            interval: 14,
            lastVisit: "05/10/2021",
            visitList: [
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021",
                "05/10/2021"
            ],
            notes: "Every friday"
        }
    ]);

    const [editPage, setEditPage] = useState("");

    //const nova = [{area: 'Avalon', clients: [4]},{area: 'Manly'}, {area: 'Cromer'}]

    console.log(areaList);
    console.log(clientList);

    const addNewClient = (
        name,
        area,
        address,
        interval,
        date,
        visitList,
        notes
    ) => {
        let newDate = "";
        const vList = clientList.map((item) => item);

        if (date === String) {
            console.log("e string");
        } else {
            newDate = _handleNewDate(date);
        }

        const indexExist = vList.findIndex((item) => item.name === name);

        if (indexExist < 0) {
            const newClient = {
                name: name,
                area: area,
                address: address,
                interval: interval,
                lastVisit: newDate,
                visitList: visitList,
                notes: notes
            };
            const newClientList = [...clientList, newClient];
            setClientList(newClientList);
        } else {
            vList[indexExist].name = name;
            vList[indexExist].area = area;
            vList[indexExist].address = address;
            vList[indexExist].interval = interval;
            vList[indexExist].lastVisit = date;
            vList[indexExist].visitList = visitList;
            vList[indexExist].notes = notes;
            setClientList(vList);
        }
    };

    const _handleTodayVisit = (event) => {
        const clientCapture = event.target.parentElement.closest("tr").id;
        const modList = clientList.map((item) => item);
        const index = clientList.findIndex(
            (item) => item.name === clientCapture
        );

        modList[index].visitList.push(modList[index].lastVisit);

        const todayDate = _handleNewDate();
        modList[index].lastVisit = todayDate;

        setClientList(modList);
    };

    const _handleSelectedDate = (event) => {
        const clientCapture = event.target.parentElement.closest("tr").id;
        const modList = clientList.map((item) => item);
        const index = clientList.findIndex(
            (item) => item.name === clientCapture
        );

        const ddmmyyy = event.target.value;

        modList[index].visitList.push(modList[index].lastVisit);

        const visitDate = _handleNewDate(ddmmyyy);
        modList[index].lastVisit = visitDate;

        setClientList(modList);
    };

    const _handleChangeName = (oldName, nameEdit) => {
        let nList = clientList.map((item) => item);
        const indexName = nList.findIndex((item) => item.name === oldName);
        nList[indexName].name = nameEdit;
        setClientList(nList);
        setEditPage(nameEdit);
    };

    const deleteClient = (name) => {
        if (
            window.confirm("Are you sure you want to delete this Client?") ===
            true
        ) {
            let ndList = clientList.map((item) => item);
            const indexDelete = ndList.findIndex((item) => item.name === name);

            ndList.splice(indexDelete, 1);
            console.log(ndList);

            if (ndList.length === 0) {
                alert("You cant't delete all clients");
                return;
            }

            setClientList(ndList);
            setEditPage(ndList[ndList.length - 1].name);
        } else {
            console.log("deleting cancelled");
            return;
        }
    };

    return (
        <ClientsContext.Provider
            value={{
                clientList,
                areaList,
                addNewClient,
                _handleTodayVisit,
                _handleSelectedDate,
                setEditPage,
                editPage,
                _handleChangeName,
                setAreaList,
                deleteClient
            }}
        >
            {children}
        </ClientsContext.Provider>
    );
};

export default ClientsProvider;

function _handleNewDate(date = null) {
    let lDate = "";

    if (date === null) {
        lDate = new Date();
    } else {
        lDate = new Date(date);
    }

    //lDate.setDate(lDate.getDate())

    const day = String(lDate.getDate()).padStart(2, "0");
    const month = String(lDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    const year = lDate.getFullYear();
    var newDate = `${day}/${month}/${year}`;

    return newDate;
}
