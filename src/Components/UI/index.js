import styled from "styled-components"


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


    .btnToday{
        cursor: pointer;
        color: #aaa;

        @media (max-width: 1200px) {
                            
            width: 19px;
            height: 20px;
            }

        
                    
    }

    .dataInput{

        width: 50px;

        @media (max-width: 1200px) {
                            
            width: 50px;
            

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

export const Span = styled.span`





`
