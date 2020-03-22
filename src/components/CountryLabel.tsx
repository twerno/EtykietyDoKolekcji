import * as React from 'react';
import styled from 'styled-components';
import { countryList } from '../helper/CountryNames';
import { IFlagProvider } from '../chart/FlagProvider';

export interface ICountryLabelProps {
    countryCode: string;
    direction?: 'column' | 'row';
    flagProvider: IFlagProvider;
}

export const CountryLabel: React.FC<ICountryLabelProps> = (props) => {

    const flagUrl = props.flagProvider.provideFlagFor(props.countryCode).url;

    return (
        <CountryLabelContainer direction={props.direction}>

            <svg>
                <image href={flagUrl} />
            </svg>

            <div>
                {props.children || countryList.find(c => c.code === props.countryCode.toUpperCase())?.name_pl}
            </div>
        </CountryLabelContainer>
    );
};

export interface ICountryLabelContainerProps {
    direction?: 'column' | 'row';
}

export const CountryLabelContainer = styled.div<ICountryLabelContainerProps>`
    display: flex;
    flex: ${props => props.direction === 'column' ? 1 : "initial"};

    align-items: center;

    border: 1px solid #cecece;
    min-width: 3.5cm;
    margin: 0.09cm 0.15cm;
    margin-right: 0.1cm;
    padding: 5px;

    svg {
        height: 1cm;
        max-width: 1.7cm;
    }

    image {
        transform: translate(1px, 1px);
        outline: 1px solid #cecece; 
        height: calc(100% - 2px);
   }

    font-family: 'Inter', sans-serif; 
    font-size: 18px;
`;


// export const Flaga: React.FC = (props) => {
//     return (
//         <div style={
//             {
//                 margin: '2px',
//                 border: '1px solid black',
//                 padding: '2px'
//             }
//         }>{props.children}</div>
//     );
// };
