import styled from "styled-components";

export const A4Page = styled.div`
    height: 297mm;
    width: 210mm;
    padding: 10mm;

    display: flex;
    flex-direction: column;

    margin: 10px;
    border: 1px solid black;

    box-sizing: border-box;

    @media print {
        margin: 0px;
        border: none;
    }

`;