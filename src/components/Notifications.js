import React from 'react';
import styled from 'styled-components';
 
export function Notifications(props){
    
    return (
        <Container>
            <div>Notification Page
                <img src="/images/notifications-get-started.png" alt =""/>
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
        height: 100%;
    }
`;