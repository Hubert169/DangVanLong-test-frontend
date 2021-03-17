import styled from "styled-components";

export const Styled = styled.div`
    .list-cate > li >a{
        letter-spacing: 3px;
        color: #000000;
        line-height: 48px;
        font-size: 14px;
        @media(max-width:991px){
            line-height: 36px;
        }
        
        @media(max-width:640px){
            line-height: 20px;
            letter-spacing: 1px;
        }
        @media(max-width:380px){
            font-size:10px;
            line-height: 12px;
        }
    }
    
`