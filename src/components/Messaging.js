import React from 'react';
import styled from 'styled-components';
 
export function Messaging(props){
    
    return (
        <Container>
            <div>
                <h2>Messaging Page</h2>
                <img src= "/images/messaging-get-started.png" alt=""/>
                                
            </div>
        </Container>
    )
};

const Container = styled.div`
    grid-area: center;
    div{
        padding:100px, 100px, 10px, 100px;
    }
    img{
        width: 100%;
    }
`;




