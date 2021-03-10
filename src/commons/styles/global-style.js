import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        outline: none;
        box-sizing: border-box;
    }

    body{
        line-height: normal;
    }

    html, body{
        width: 100%;
        min-height: 100%;
        display: flex;
        padding:0;
        margin:0
    }

    #root{
        background: #2c3e50;
        height: 100%;
        width: 100%;
    }

    .mb-2{
        margin-bottom: 20px;
    }

    .pt-2{
        padding-bottom: 20px;
    }

    .ml-1{
        margin-left: 10px;
    }

    .cursor {
        cursor: pointer;
    }
`;

export default globalStyle;
