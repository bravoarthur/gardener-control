import React, { useState } from 'react';
import AddClient from '../AddClient/AddClient';
import Edit from '../Edit/Edit';
import ShowList from '../ShowList/ShowList';


function Home() {

    const [index, setIndex] = useState(0)
        
    const _handlePage = indexPage => setIndex(indexPage)
    
    
    const pages = [<ShowList handlePage={_handlePage}/>, <AddClient handlePage={_handlePage}/>, <Edit handlePage={_handlePage}/>]

    
    return (

        <>

            {index === 0 ? <button onClick={()=> _handlePage(1)}>Add new Client</button> : '' }
            {pages[index]}
            
        </>

    )

}

export default Home