import React from 'react';
import styled from 'styled-components';
 
export function Opportunities(props){
    
    return (
        <Container>
            <div>
                <h2>Opportunities Page</h2>
                <img src= "/images/opportunities-get-started.png" alt=""/>
            </div>
        </Container>
    )
};

const Container = styled.div`
    grid-area: center;
    h2{
        padding: 100px, 100px, 100px, 100px;
    }
    img{
        width: 100%;
    }
`;