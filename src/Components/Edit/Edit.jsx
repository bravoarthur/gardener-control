import { MenuItem, TextField } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React, { useContext, useState } from "react";
import { ClientsContext } from "../Contexts/ClientsContext";
import {
    ButtonA,
    ButtonB,
    ButtonDelete,
    DivBtnEdit,
    DivEdit,
    H3,
    InputNumberEdit,
    TableEdit,
    TrEdit
} from "../UI";

function Edit({ handlePage }) {
    const {
        clientList,
        editPage,
        areaList,
        addNewClient,
        _handleChangeName,
        deleteClient
    } = useContext(ClientsContext);

    const modList = clientList.map((item) => item);
    const index = modList.findIndex((item) => item.name === editPage);

    const [name, setName] = useState(modList[index].name);
    const [area, setArea] = useState(modList[index].area);
    const [address, setAddress] = useState(modList[index].address);
    const [interval, setInterval] = useState(modList[index].interval);
    const lastVisit = modList[index].lastVisit;
    const [visitList, setVisitList] = useState(modList[index].visitList);
    const [notes, setNotes] = useState(modList[index].notes);

    const oldName = modList[index].name;

    const _handleSave = () => {
        addNewClient(
            name,
            area,
            address,
            interval,
            lastVisit,
            visitList,
            notes
        );
    };

    const _handleDeleteVisit = (indexVisit) => {
        let newVisitList = visitList;

        newVisitList.splice(indexVisit, 1);
        setVisitList(newVisitList);
        _handleSave();
    };

    const _handleDeleteClient = () => {
        deleteClient(name);
        handlePage(0);
    };

    return (
        <div>
            <H3>Edit Client</H3>

            <TableEdit>
                <tbody>
                    <TrEdit>
                        <td className="tdEdit">Name:</td>
                        <td className="tdEditCampo">
                            <TextField
                                type="text"
                                variant="outlined"
                                size="small"
                                label="Name"
                                className="textInputEdit"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                    _handleChangeName(
                                        oldName,
                                        event.target.value
                                    );
                                }}
                            />
                        </td>
                    </TrEdit>

                    <TrEdit>
                        <td>Area:</td>
                        <td className="tdEditCampo">
                            <TextField
                                variant="outlined"
                                className="textInputEdit"
                                select
                                label="Area"
                                size="small"
                                fullWidth
                                defaultValue={area}
                                onChange={(event) =>
                                    setArea(event.target.value)
                                }
                            >
                                {areaList.map((item, index) => (
                                    <MenuItem value={item} key={index}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </td>
                    </TrEdit>

                    <TrEdit>
                        <td>Address:</td>
                        <td className="tdEditCampo">
                            <TextField
                                type="text"
                                variant="outlined"
                                className="textInputEdit"
                                size="small"
                                fullWidth
                                value={address}
                                label="Address"
                                onChange={(event) =>
                                    setAddress(event.target.value)
                                }
                            />
                        </td>
                    </TrEdit>

                    <TrEdit>
                        <td>Frequency:</td>
                        <td className="tdEditCampo">
                            <InputNumberEdit
                                type="number"
                                placeholder="Frequency"
                                className="textInputEdit"
                                min="1"
                                value={interval}
                                onChange={(event) =>
                                    setInterval(event.target.value)
                                }
                            />
                        </td>
                    </TrEdit>

                    <TrEdit>
                        <td>Last Visit:</td>
                        <td className="tdEditCampo">{lastVisit}</td>
                    </TrEdit>
                </tbody>
            </TableEdit>

            <DivEdit>
                <h4>Notes</h4>
                <TextField
                    variant="outlined"
                    type="text"
                    multiline
                    maxRows={4}
                    minRows={4}
                    fullWidth
                    label="Notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                />
            </DivEdit>

            <DivBtnEdit>
                <ButtonA onClick={_handleSave}>Save changes</ButtonA>

                <ButtonB onClick={() => handlePage(0)}>Back Home</ButtonB>

                <ButtonDelete onClick={_handleDeleteClient}>
                    Delete Cliente
                </ButtonDelete>
            </DivBtnEdit>

            <DivEdit>
                <h4>Visit List:</h4>
            </DivEdit>

            <TableEdit>
                <thead>
                    <tr>
                        <th className="editVisitList">Date</th>
                        <th className="editVisitList">Delete visit</th>
                    </tr>
                </thead>

                <tbody>
                    {visitList.map((item, ind) => {
                        return (
                            <tr key={ind} className="editVisitList">
                                <td className="editVisitList">{item}</td>
                                <td className="editVisitList">
                                    <DeleteForeverIcon
                                        className="editVisitDelete"
                                        onClick={() => _handleDeleteVisit(ind)}
                                    ></DeleteForeverIcon>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </TableEdit>
        </div>
    );
}

export default Edit;
