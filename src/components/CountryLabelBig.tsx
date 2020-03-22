import * as React from 'react';
import styled from 'styled-components';
import { countryList } from '../helper/CountryNames';
import { IFlagProvider } from '../chart/FlagProvider';

export interface ICountryLabelProps {
    countryCode: string;
    info?: string[];
    flagProvider: IFlagProvider;
}

export const CountryLabelBig: React.FC<ICountryLabelProps> = (props) => {

    const flagUrl = props.flagProvider.provideFlagFor(props.countryCode).url;

    return (
        <CountryLabelBigContainer>

            <img src={flagUrl} />

            <div className="label">
                {countryList.find(c => c.code === props.countryCode.toUpperCase())?.name_pl}
            </div>

            <ul className="info">
                {props.info?.map((v, idx) =>
                    <li key={`${props.countryCode}_${idx}`}>
                        {v}
                    </li>)
                }
            </ul>

        </CountryLabelBigContainer>
    );
};

export const CountryLabelBigContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    border: 1px solid #cecece;
    width: 4cm;
    margin: 0.15cm;
    padding: 5px;

    img {
        outline: 1px solid #cecece; 
        outline-offset: -1px;
        width: 4cm;
    }

    .label{
        font-family: 'Inter', sans-serif; 
        font-size: 22px;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    ul.info {
        margin: 0;
        list-style: none;
        padding: 0;
    }

    ul.info li {
        font-size: 12px;
        color: #7b7b7b99;
    }
`;
