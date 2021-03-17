import styled from "styled-components";

export const Styled = styled.div`
    padding-bottom:68px;
    .list-item {
        li {
            margin-top:4px;
        }
        a {
            font-size:13px;
            color:#000000;
        }
    }
    .footer-left {
        flex-grow: 1;
    }
    .box-ib {
        display:flex;
        margin-bottom: 28px;
    }
    .box-signup {
        .title-small {
            margin-bottom:7px;
        }
        input {
            width: 100%;
            max-width: 490px;
            border: 1px solid #000000;
            height: 46px;
            box-sizing: border-box;
            margin-right:5px;
            padding: 12px;
        }
        button {
            font-size:17px;
            font-weight:600;
            height:46px;
            padding: 10px;
            color:white;
            border:none;
            background-color:#000000;
            cursor: pointer;
        }
    }
    .footer-content {
        padding:45px 95px 0;
        display:flex;
    }
    .footer-right {
        max-width: 255px;
        width: 100%;
        padding-left: 25px;
    }
    .footer-bottom {
        text-align:center;
        padding:0 30px;
        margin-top:85px;
            font-size:11px;
            line-height:20px;
            letter-spacing:0.6px;
        a {
            margin:0 13px; 
            color:#000000;
        }
    }
    .list-social {
        padding-left:10px;
        li {
            display:inline-block;
            &:not(:last-child){
                margin-right:30px;
            }
        }
        i {
            font-size:28px;
            color:#000000;
        }
    }
    
    @media(max-width:991px){
        padding-bottom:40px;
        .footer-bottom {
            margin-top:50px;

        }
        .box-ib {
            margin-bottom:24px;
        }
        .list-social {
            li {
                &:not(:last-child){
                    margin-right:20px;
                }
            }
            i {
                font-size:24px;
            }
        }
        .footer-content{
            padding:45px 30px 0;
        }
        .footer-right {
            max-width:190px;
        }
    }
    @media(max-width:640px){
        .footer-content{
            display:block;
        }
        .list-social {
            padding-left:0;
        }
        .footer-right {
            max-width:100%;
            padding-left:0;
            margin-top:32px;
        }
        .footer-right,.footer-left{
            width:100%;
        }
    }
    
    @media(max-width:380px){
        .box-signup {
            input,button {
                height:40px;
                font-size:14px;
            }
        }
        .footer-content {
            padding:45px 15px 0;
        }
        .list-social {
            i {
                font-size:18px;
            }
        }
        .box-ib {
            margin-bottom:18px;
        }
        .title-small {
            font-size:14px;
        }
        .footer-bottom {
            margin-top:30px;
        }
    }
    
`