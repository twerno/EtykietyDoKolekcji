import styled from "styled-components";

export const A4Page = styled.div`
    height: 297mm;
    width: 210mm;
    padding: 10mm;

    display: flex;
    flex-direction: column;

    @media print {
        page-break-after: always;
    }
`;