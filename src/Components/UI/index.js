import styled from "styled-components"

import calen from "../UI/calen.svg"



export const H1 = styled.h1`

    text-align: center;

`

export const H3 = styled.h3`

    text-align: center;

`

export const Table = styled.table`

    width: 90%;
	margin-bottom : .5em;
    table-layout: fixed;

    .late{
        color: rgb(206, 18, 18);
	    font-weight: 550;
        .btnToday{
            color: rgb(206, 18, 18, 0.6);
        }
        
    }

    .week{
        color: rgb(5, 143, 5);
	    font-weight: 600;
        .btnToday{
            color: rgb(5, 143, 5, 0.6);
        }

    }
    .hiddenItem{
        display: none;
    }


    .btnToday{
        cursor: pointer;
        color: #aaa;

        @media (max-width: 1200px) {
                            
            width: 19px;
            height: 20px;
            }
                       
    }
  
`

export const Td = styled.td`

    padding: .0.7em;
	margin: 0;
	border: 1px solid #ccc;
	text-align: center;
    font-size: 10pt;

    @media (max-width: 1200px) {
                            
        font-size: 7pt;}
    
`
export const Tr = styled.tr`

    background-color: #white;
    
        
`

export const Tbody = styled.tbody`

    tr:nth-child(even) {
    background-color: #eee;
    }
`

export const Thead = styled.thead`

`
export const Th = styled.th`

    padding: .3em;
	margin: 0;
	border: 2px solid #bbb;
	text-align: center;
    font-weight: 620;
	background-color: #DDDD;
	font-size: 10pt;

    @media (max-width: 1200px) {
                            
        font-size: 7pt;}

`

export const DivHome = styled.div`

    width: 55%;    
    display: inline-block;
    
    margin-right: 15%;


`

export const Span = styled.span`


    .divSelectInterval{

        display: inline-block; 
        width: 45%      
        
        margin-left: 55%;
        

    }

    .inputViewInterval{
        width: 50px;
        margin-left: 10px; 
        margin-top: 20px;
        text-align: left;
    }



`

export const InputDate = styled.input`

border: none; 

:focus{
    
    outline: none;
}


::-webkit-datetime-edit {
     
     display: none;
                          
    }


::-webkit-calendar-picker-indicator {
    text-align: center; 
    width: 10pt;
    height: 12pt;
    margin: 0;
    background: url(${calen}) no-repeat;
    cursor: pointer;
}

`
export const DivArea = styled.div`

    margin-top: 40px;
    margin-right: 180px;
    text-align: center;
    display: inline-block;

    .btnBackHome{
        margin: auto;
        margin-left: 150px;
    }

`


export const TableArea = styled.table`

    width: 40%;
    text-align: left;    
    table-layout: fixed;
    margin: auto;
    margin-top: 35px;
    margin-bottom: 35px;
       

        .trArea{

            text-align: left;
            
        }

        .deleteArea{

            color: grey;
            cursor: pointer;
            padding: 1px 1px;
            width: 25px;
            height: 25px;
            margin-left: 6px;
            margin-right: 6px;
            position: relative;
            bottom: -2px;
            
        }
        .tdPosition{
            text-align: center;
        }

`


export const InputNumber = styled.input`

    width: 295px;
    height: 50px;
    text-align: left;
    border: 1px solid #bbb;
    font-size: 13pt;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;
    text-indent: 15px;

    .editFrequency{
        height: 12px
    }

    :focus {
 
        border: 2px solid #3f51b5;
        outline: none;
               
    }       

`

export const InputNumberEdit = styled.input`

    width: 98%;
    height: 39px;
    text-align: left;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 13pt;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;
    text-indent: 10px;
    padding: 0px;
        

    :focus {
 
        border: 2px solid #3f51b5;
        outline: none;
               
    }
       
`


export const ButtonA = styled.button`

    background-color: #3f51b5;  
    color: #fff;
    padding: 6px 18px;
    font-size: 0.675rem;
    min-width: 110px;
    max-width: 180px
    box-sizing: border-box;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
    font-weight: 500;
    line-height: 1.55;
    border-radius: 9px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    margin-top: 10pt;
    margin-left: 10pt;
    border: none;

    :hover {
        text-decoration: none;
        background-color:  #303f9f;
    }
   
`


export const ButtonB = styled.button`

    background-color: white ;  
    color: #3f51b5;
    
    border-top-color: rgba(63, 81, 181, 0.5);
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgba(63, 81, 181, 0.5);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgba(63, 81, 181, 0.5);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgba(63, 81, 181, 0.5);
    border-left-style: solid;
    border-left-width: 1px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;

    padding: 5px 17px;
    font-size: 0.675rem;
    min-width: 110px;
    max-width: 180px
    box-sizing: border-box;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: background-color, box-shadow, border;
    transition-duration: 250ms, 250ms, 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0ms, 0ms, 0ms;
        
    font-weight: 500;
    line-height: 1.55;
    border-radius: 9px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    margin-top: 10pt;
    margin-left: 10pt;
    

    :hover {
        text-decoration: none;
        background-color:  rgba(63, 81, 181, 0.08);
        border-top-color: rgba(63, 81, 181, 0.8);
        border-top-style: solid;
        border-top-width: 1px;
        border-right-color: rgba(63, 81, 181, 0.8);
        border-right-style: solid;
        border-right-width: 1px;
        border-bottom-color: rgba(63, 81, 181, 0.8);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-left-color: rgba(63, 81, 181, 0.8);
        border-left-style: solid;
        border-left-width: 1px;
        border-image-source: initial;
        border-image-slice: initial;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: initial;
    }
   
`

export const TableEdit = styled.table`

    width: 30%;
    text-align: left;    
    margin: auto;
    margin-top: 35px;
    margin-bottom: 20px;
             
        .deleteArea{

            color: grey;
            cursor: pointer;
            padding: 1px 1px;
            width: 25px;
            height: 25px;
            margin-left: 6px;
            margin-right: 6px;
            position: relative;
            bottom: -2px;
            
        }

        .tdEdit{

            width: 80px;
            
        }

        .tdEditCampo{

            width: 100%;
            font-weight: 400;
                         
        }

        .editVisitList{

            text-align: center;
            border: solid 1px #bbb;
            width: 100%;
                        
        }

        .editVisitDelete{

            color: grey;
            cursor: pointer;
            padding: 1px 1px;
            width: 25px;
            height: 25px;
            margin-left: 0px;

        }

`


export const DivEdit = styled.div`

        width: 40%;
        margin: auto;

        
`

export const DivBtnEdit = styled.div`

        padding: 20px;
        text-align: center;
            
`

export const TrEdit = styled.tr`

        height: 50px;
        font-weight: 600;
        text-align: left;

        .textInputEdit{
            width: 100%;
            min-width: 130px;
            max-width: 250px;
        }
        
        
`


export const ButtonDelete = styled.button`

    background-color: #f50057;  
    color: #fff;
    padding: 6px 8px;
    font-size: 0.675rem;
    min-width: 110px;
    max-width: 180px
    box-sizing: border-box;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
    font-weight: 500;
    line-height: 1.55;
    border-radius: 9px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    margin-top: 10pt;
    margin-left: 10pt;
    border: none;

    :hover {
        text-decoration: none;
        background-color:  #c51162;
    }


`







/*
 background-color: #f50057;  
    color: #fff;
    padding: 6px 18px;
    font-size: 0.675rem;
    min-width: 34px;
    max-width: 180px
    width: 140px;
    box-sizing: border-box;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
    font-weight: 500;
    line-height: 1.55;
    border-radius: 9px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    margin-top: 10pt;
    margin-left: 10pt;
    border: none;

    :hover {
        text-decoration: none;
        background-color:  #c51162;
    }

*/