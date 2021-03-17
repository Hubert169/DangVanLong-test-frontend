import styled from "styled-components";

export const Styled = styled.div`
    .list-ins{ 
        li{
            float:left;
        }
    }
    .introduce-ins {
        color:#000000;
        letter-spacing:1px;
        font-size:17px;
        line-height:24px;
        text-align:center;
        text-transform: uppercase;
        padding:23px 30px;
    }
    
    @media(max-width:991px){
        .introduce-ins {
            font-size:14px;
        }
    }
    
    @media(max-width:640px){
        .introduce-ins {
            line-height:20px;
            padding:15px 15px;
        }
    }
    
    @media(max-width:640px){
        .introduce-ins {
            font-size:12px;
            line-height:18px;
        }
    }
`