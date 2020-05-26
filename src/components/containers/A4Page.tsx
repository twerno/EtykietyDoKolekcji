import styled, { css } from "styled-components";

interface IA4PageProps {
    position?: 'absolute' | 'relative';
}

export const A4Page = styled.div<IA4PageProps>(props => css`
    height: 297mm;
    width: 210mm;
    padding: 10mm;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px;
    border: 1px solid black;

    box-sizing: border-box;

    @media print {
        margin: 0px;
        border: none;
        page-break-after: always;
    }

`, props => ({ position: props.position }));