import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';

function AddArea ({handlePage}) {

    const {areaList, setAreaList, clientList} = useContext(ClientsContext)

    const [newAreaInput, setNewAreaInput] = useState()



    const deleteArea = (indexArea) => {

        const indexDelete = clientList.findIndex(item => item.area === areaList[indexArea])

        if(indexDelete >=0) {
            alert("You can`t delete an area with clients")
            return

        }else {

            let newAreaList = areaList.map(item => item)
            let areaDeleted = newAreaList.splice(indexArea, 1)

            setAreaList(newAreaList)            

        }
        
    }    

    const _handleAddArea = () => {

        const indexNewArea = areaList.findIndex(item => item === newAreaInput)

        if(indexNewArea >=0 ){
            alert('This area already exists')
            return

        }else {
                        
            const listNewArea = [...areaList, newAreaInput]
            setAreaList(listNewArea)
        }
        
    }

    const _handleChangeIndex = (index, newPosition) => {

        const vAreaList = areaList.map(item => item)

        const itemMod = vAreaList.splice(index, 1)

        vAreaList.splice(newPosition-1,0,itemMod[0])

        document.getElementById(index+areaList[index]).value = ''
        setAreaList(vAreaList)

    }



    return (

        <div>

            <div>

                <input type="text" onChange={event => setNewAreaInput(event.target.value)}/>
                <button onClick={_handleAddArea}>Include New area</button>
                

            </div>


            <div>

                <ol>
                    {areaList.map((item, index) => {

                    return (

                        <li key={index}>{item}  - <button onClick={() => deleteArea(index)}>Delete Area</button> - <input id={index+item} type='number' max={areaList.length} min='1' placeholder='Change view position' onBlur={(event)=>_handleChangeIndex(index, event.target.value)}/></li>

                        )
                    })
                    }



                </ol>

            </div>

            
            <button onClick={() => handlePage(0)}>Back Home</button>

        </div>

    )

}

export default AddArea