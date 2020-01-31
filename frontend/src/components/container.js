import styled from 'styled-components';

const Container = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

    div{
        background-color: #fff;
        padding 30px;
        max-width:500px;
        width:100%;
        border-radius:10px
    }

    form{
        display:flex;
        flex-direction:row;
        margin-bottom:20px;
    }

    input{
        height:45px;
        padding: 10px 15px;
        color: #666;
        border: 1px solid #e3e3e3;
        border-radius:6px;
        width: 90%;
        margin-right:15px;
        font-size:16px;
    }

    button{
        width:45px;
        height:45px;
        border:0;
        border-radius:4px;
        background-color:#7159c1;
        display:flex;
        align-itens:center;
        justify-content:center;
        -webkit-box-pack:center;
        -webkit-box-align:center;
        color:#fff;
        padding:5px 7px;
        cursor:pointer;
    }

    button:hover{
        background-color:#6c50c9;
        transition: 0.2s ease-in;
    }

    li{
        margin-bottom:10px;
        font-size:16px;
        color:#666;
    }
`;

export default Container;
