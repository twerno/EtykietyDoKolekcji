import * as React from 'react';
import styled from 'styled-components';
import { IFlagProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { AsyncTextRenderer } from './AsyncTextRenderer';
import { IOkladkaCountryProps } from './OkladkaMapa';

export interface ICountryLabelProps {
    countryData: IOkladkaCountryProps;
    flagProvider: IFlagProvider;
}

export const CountryLabelBig = (props: ICountryLabelProps) => {
    const countryCode = props.countryData.countryCode;

    const flagUrl = props.flagProvider.provideFlagFor(countryCode).url;
    const namePl = CountryConverterService.countryCode2NamePl(countryCode);

    return (
        <CountryLabelBigContainer>
            <div>
                <img src={flagUrl} alt={countryCode} />

                <div className="label">
                    {namePl}
                </div>
            </div>

            <ul className="info">
                {props.countryData.info?.map((v, idx) =>
                    <li key={`${countryCode}_${idx}`}>
                        <AsyncTextRenderer provider={v} />
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

    flex: 0.5;

    padding: 5px;

    .flag {
        position: relative;
    }

    img {
        width: 3cm;
        outline: 1px solid #cececee6; 
    }

    .label{
        font-family: 'Inter', sans-serif; 
        font-size: 17px;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 10px;
        margin-left: -5px;
        margin-right: -5px;
    }

    ul.info {
        margin: 0;
        list-style: none;
        padding: 0;
        font-size: 9px;
        color: #7b7b7b99;
        margin-left: -5px;
        margin-right: -5px;
    }

    ul.info li:not(':first-child') {
        margin-top: 1px;
    }
`;
