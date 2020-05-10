import * as React from 'react';
import styled, { withTheme } from 'styled-components';
import { IFlagProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { AsyncTextRenderer } from './utils/AsyncTextRenderer';

export interface ICountryLabelProps {
    countryCode: string;
    infoList?: Array<string | Promise<string>>;
    flagUrl?: string;
    flagProvider: IFlagProvider;
}

export const LabelWithFlag = (props: ICountryLabelProps) => {
    const countryCode = props.countryCode;

    const flagUrl = props.flagUrl
        || props.flagProvider.provideFlagFor(countryCode).url;
    const namePl = CountryConverterService.countryCode2NamePl(countryCode);

    return (
        <LabelWithFlagContainer
            imgWidth={3}
        >
            <img src={flagUrl} alt={countryCode} />

            <div className="label">
                {namePl}
            </div>

            <ul className="info">
                {props.infoList?.map((v, idx) =>
                    <li key={`${countryCode}_${idx}`}>
                        <AsyncTextRenderer provider={v} />
                    </li>)
                }
            </ul>

        </LabelWithFlagContainer>
    );
};

interface ILabelWithFlagContainerProps {
    imgWidth?: number;
}

const LabelWithFlagContainer = styled.div<ILabelWithFlagContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0.5;
    /* border: 1px solid #cececee6; */
    width: ${props => props.imgWidth || 3}cm;
    transform: scale(1);

    padding: 5px;

    .flag {
        position: relative;
    }

    img {
        width: ${props => props.imgWidth || 3}cm;
        /* width:100%; */
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
        transform: scale(${props => (props.imgWidth || 3) / 3});
    }

    ul.info li:not(':first-child') {
        margin-top: 1px;
    }
`;