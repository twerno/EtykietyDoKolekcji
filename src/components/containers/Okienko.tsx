import styled from 'styled-components';

const Okienko = styled.div`
    border: 1px #cecece solid;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    
    background: #ededed59;
    overflow: hidden;

    @media print {
        background: none;
    }
`;

export const OkienkoTyp2 = styled(Okienko)`
    width: 18.5cm;
    height: 120mm;
`;

export const OkienkoTyp3 = styled(Okienko)`
    width: 18.5cm;
    height: 85mm;
`;

export const OkienkoTyp20 = styled(Okienko)`
    width: 35mm;
    height: 40mm;
`;

export const OkienkoTyp35 = styled(Okienko)`
    width: 27mm;
    height: 27mm;
`;

/**
 * Strona o wymiarach 204 x 259 mm
 * format zbliżony do amerykańskiego Quatro
 */
export const StronaQuatro = {
    OkienkoTyp2,
    OkienkoTyp3,
    OkienkoTyp20,
    OkienkoTyp35
};
