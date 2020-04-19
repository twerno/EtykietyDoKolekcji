import * as React from 'react';
import styled from 'styled-components';
import { IFlagProvider } from '../chart/FlagProvider';
import { IOkladkaCountryProps } from './Okladka';
import CountryConverterService from '../service/CountryConverterService';

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
    /* justify-content: space-between; */

    flex: 0.5;

    /* border: 1px solid #cecece;
    width: 3cm;
    margin: 0.191cm;
    margin: 0.2cm 0.6cm; */
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

function AsyncTextRenderer(props: { provider: string | Promise<string> }) {
    const [text, setText] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof props.provider === 'string') {
            setText(props.provider);
        }
        else {
            props.provider
                .then(setText);
        }
    }, [props.provider]);

    return <>{text}</>;
}