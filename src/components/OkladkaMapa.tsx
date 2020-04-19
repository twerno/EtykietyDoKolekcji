import * as React from 'react';
import styled from 'styled-components';
import { MapChart, MinimapPosition } from '../chart/chart';
import { FlagIconCssProvider } from '../chart/FlagProvider';

export interface IOkladkaCountryProps {
    countryCode: string;
    label?: React.ReactNode;
    info?: Array<string | Promise<string>>;
    showPin?: true;
}

export interface IOkladkaMapaProps {
    countryList: IOkladkaCountryProps[];
    includeInView?: string[];
    minimap?: MinimapPosition;
}

export const OkladkaMapa = (props: IOkladkaMapaProps) => {

    return (
        <OkladkaContainer>
            <MapChart
                countryDataList={props.countryList}
                includeInView={props.includeInView}
                minimap={props.minimap}
                flagProvider={FlagIconCssProvider}
            />
        </OkladkaContainer>
    );
}

export const OkladkaContainer = styled.div`
    margin-top: 10mm;
    width: 18.5cm;
    height: 12cm;
    border: 1px #cecece solid;
    overflow: hidden;

    padding: 10px 0px;
`;
