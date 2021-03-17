import styled from "styled-components";

export const Styled = styled.div`
    .container-section {
        position:relative;
        overflow: hidden;
        width:100%;
    }
    .post-title {
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        text-align:center;
    }
    .col-md-6 {
        width:50%;
        float:left;
        position:relative;
    }
    .cate-left {
        left:52px;
        top:145px;
        position:absolute;
        @media(max-width:1200px){
            top:50%;
            left:52px;
            transform:translateY(-50%);
        }
    }
    .title-large {
        letter-spacing: 1px;
        line-height: 60px;
        color: #000000;
        font-weight: 600;
    }
    .title-medium {
        line-height:32px;
        color:white;
    }
    .sub-title {
        color: white;
        font-size: 26px;
        font-weight: 600;
        margin-top: 5px;
    }
    
    img {
        max-width:100%;
        width:100%;
        vertical-align: -webkit-baseline-middle;
    }
    
    @media(max-width:991px){
        .cate-left {
            left: 30px;
        }
        .title-medium {
            font-size:32px;
        }
        .title-large {
            font-size:62px;
        }
        .sub-title {
            font-size:16px;
            margin-top:0;
        }
    }
    
    @media(max-width:640px){

        .cate-left {
            left: 15px;
        }
        .title-medium {
            font-size:22px;
            line-height:20px;
        }
        .title-large {
            font-size:30px;
            line-height: 30px;
        }
        .sub-title {
            font-size:14px;
        }
    }
    
    @media(max-width:380px){
        .cate-left {
            left: 15px;
        }
        .title-medium {
            font-size:16px;
        }
        .title-large {
            font-size:20px;
            line-height: 24px;
            letter-spacing:0px;
        }
        .sub-title {
            font-size:10px;
        }
    }
`