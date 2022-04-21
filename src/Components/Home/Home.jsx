import React, { useState } from "react";
import AddArea from "../AddArea/AddArea";
import AddClient from "../AddClient/AddClient";
import Edit from "../Edit/Edit";
import ShowList from "../ShowList/ShowList";
import { ButtonA, DivHome } from "../UI";

function Home() {
    const [index, setIndex] = useState(0);

    const _handlePage = (indexPage) => setIndex(indexPage);

    const pages = [
        <ShowList handlePage={_handlePage} />,
        <AddClient handlePage={_handlePage} />,
        <Edit handlePage={_handlePage} />,
        <AddArea handlePage={_handlePage} />
    ];

    return (
        <>
            <DivHome>
                {index === 0 ? (
                    <ButtonA onClick={() => _handlePage(1)}>
                        Add new Client
                    </ButtonA>
                ) : (
                    ""
                )}
                {index === 0 ? (
                    <ButtonA onClick={() => _handlePage(3)}>
                        Add new Area
                    </ButtonA>
                ) : (
                    ""
                )}
            </DivHome>
            {pages[index]}
        </>
    );
}

export default Home;
