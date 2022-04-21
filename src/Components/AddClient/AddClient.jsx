import { Box, MenuItem, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { ClientsContext } from "../Contexts/ClientsContext";
import { ButtonA, ButtonB, H3, InputNumber } from "../UI";

function AddClient({ handlePage }) {
    const { areaList, addNewClient, clientList } = useContext(ClientsContext);

    const [name, setName] = useState();
    const [area, setArea] = useState("");
    const [address, setAddress] = useState();
    const [interval, setInterval] = useState();
    const [date, setDate] = useState();
    const visitList = [];
    const [notes, setNotes] = useState();

    const _handleClientValid = (event) => {
        const nameValid = event.target.value;

        const indexValid = clientList.findIndex(
            (item) => item.name === nameValid
        );

        if (indexValid >= 0) {
            alert("This client alredy exists");
            const inputName = document.getElementById("nameValid");
            inputName.value = "";
        }
    };

    return (
        <div>
            <H3>Add new Client</H3>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    addNewClient(
                        name,
                        area,
                        address,
                        interval,
                        date,
                        visitList,
                        notes
                    );
                    handlePage(0);
                }}
            >
                <Box
                    sx={{
                        width: 300,
                        height: 80,
                        margin: "auto"
                    }}
                >
                    <TextField
                        variant="outlined"
                        select
                        label="Select Area"
                        value={area}
                        fullWidth
                        required
                        onChange={(event) => setArea(event.target.value)}
                    >
                        {areaList.map((item, index) => (
                            <MenuItem value={item} key={index}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 80,
                        margin: "auto"
                    }}
                >
                    <TextField
                        variant="outlined"
                        fullWidth
                        type="text"
                        label="Name"
                        id="nameValid"
                        required
                        onChange={(event) => setName(event.target.value)}
                        onBlur={_handleClientValid}
                    />
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 80,
                        margin: "auto"
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="text"
                        fullWidth
                        label="Address"
                        required
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 80,
                        margin: "auto"
                    }}
                >
                    <InputNumber
                        type="number"
                        placeholder="Frequency *"
                        min="1"
                        required
                        onChange={(event) => setInterval(event.target.value)}
                    />
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 80,
                        margin: "auto"
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="date"
                        fullWidth
                        placeholder="dd-mm-yyyy"
                        required
                        onChange={(event) => setDate(event.target.value)}
                    />
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 120,
                        margin: "auto"
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="text"
                        multiline
                        maxRows={4}
                        minRows={4}
                        fullWidth
                        label="Notes"
                        onChange={(event) => setNotes(event.target.value)}
                    />
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 50,
                        margin: "auto",
                        paddingLeft: 180
                    }}
                >
                    <ButtonA type="submit">Add Client</ButtonA>
                </Box>
            </form>

            <Box
                sx={{
                    width: 300,
                    height: 100,
                    margin: "auto",
                    paddingLeft: 180
                }}
            >
                <ButtonB onClick={() => handlePage(0)}>Back home</ButtonB>
            </Box>
        </div>
    );
}

export default AddClient;
