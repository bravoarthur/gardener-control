import React, { useContext, useState } from 'react';
import { ClientsContext } from '../Contexts/ClientsContext';
import { ButtonA, ButtonB, DivArea, InputNumber, TableArea} from '../UI';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { TextField } from '@material-ui/core';

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
            // eslint-disable-next-line no-unused-vars
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

        <DivArea>

            <div>

                <TextField variant='outlined' label='New Area' type="text" onChange={event => setNewAreaInput(event.target.value)}/>
                <ButtonA onClick={_handleAddArea}>Include New area</ButtonA>
                

            </div>


            <div>

                <TableArea>

                    <thead>

                        <tr>

                            <th className='tdPosition'>Position</th>
                            <th>Name</th>
                            <th>Delete</th>
                            <th>Change view Order</th>


                        </tr>

                    </thead>

                    <tbody>

                        {areaList.map((item, index) => {

                        return (

                            <tr key={index} className='trArea'>

                                <td className='tdPosition'> {index+1}</td>
                                <td> {item}</td>
                                <td><DeleteForeverIcon className='deleteArea' onClick={() => deleteArea(index)}>Delete Area</DeleteForeverIcon></td>
                                <td><InputNumber id={index+item} type='number' max={areaList.length} min='1' onBlur={(event)=>_handleChangeIndex(index, event.target.value)}/></td>
   

                            </tr>
            
                        )
                    })
                    }

                    </tbody>

                    
                </TableArea>

            </div>

            
            <ButtonB className='btnBackHome' onClick={() => handlePage(0)}>Back Home</ButtonB>

        </DivArea>

    )

}

export default AddArea