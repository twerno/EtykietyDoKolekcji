import * as React from 'react';
import styled from 'styled-components';
import { countryList } from '../helper/CountryNames';
import { IFlagProvider } from '../chart/FlagProvider';
import { IOkladkaCountryProps } from './Okladka';

export interface ICountryLabelProps {
    countryData: IOkladkaCountryProps;
    flagProvider: IFlagProvider;
}

export const CountryLabelBig = (props: ICountryLabelProps) => {
    const countryCode = props.countryData.countryCode;

    const flagUrl = props.flagProvider.provideFlagFor(countryCode).url;

    return (
        <CountryLabelBigContainer>
            <div>
                <img src={flagUrl} alt={countryCode} />

                <div className="label">
                    {
                        props.countryData.label
                        || countryList.find(c => c.code === countryCode.toUpperCase())?.name_pl
                    }
                </div>
            </div>

            <ul className="info">
                {props.countryData.info?.map((v, idx) =>
                    <li key={`${countryCode}_${idx}`}>
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
    width: 3cm;
    margin: 0.191cm;
    padding: 5px;

    .flag {
        position: relative;
    }

    img {
        width: 3cm;
        outline: 1px solid #cecece87; 
        outline-offset: -1px;  
    }

    .label{
        font-family: 'Inter', sans-serif; 
        font-size: 17px;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    ul.info {
        margin: 0;
        list-style: none;
        padding: 0;
        font-size: 9px;
        color: #7b7b7b99;
    }

    ul.info li:not(':first-child') {
        margin-top: 1px;
    }
`;
