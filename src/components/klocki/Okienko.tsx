import styled from 'styled-components';

export interface IOkienkoProps {
    width: number;
    height: number;
}

export const Okienko = styled.div<IOkienkoProps>`
    width: ${props => props.width}mm;
    height: ${props => props.height}mm;

    border: 1px #cecece solid;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    
    overflow: hidden;

    @media print {
        background: none;
    }
`;