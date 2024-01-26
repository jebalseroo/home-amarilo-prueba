import styled from "styled-components";

const CardsStyle = styled.div`

.card{
    
    border: 1px #000 solid ;
    border-radius: 20px;
    padding: 15px;
    width: 400px;
    height: auto;
    
    img{
        width: 100%;
    }
    .informacion{
        height: 130px;
        background: black;
        color: #ffd900;
        padding-bottom: 10px;
    }
    button{
        background: white;
    top: -22px;
    left: 129px;
    width: 131px;
    color: black;
    }
    button:hover{
        background: #ffd900;
    }
    .ubicacion{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        .logo{
            margin-left: 10px;
        }
        .ciudad{
            margin-left: 10px;
        }
    }
    .nombre_poryecto{
        margin-left: 20px;
    }
    .description{
        margin-left: 20px;
        font-size: 12px;
        margin-right: 10px;
    }

}

`;
export default CardsStyle;