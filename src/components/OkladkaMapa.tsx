import * as React from 'react';
import { MapChart, MinimapPosition } from '../chart/chart';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import { Typ2Container } from './containers/Typ2Container';

export interface IOkladkaCountryProps {
    countryCode: string;
    label?: React.ReactElement | string;
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
        <Typ2Container>
            <MapChart
                countryDataList={props.countryList}
                includeInView={props.includeInView}
                minimap={props.minimap}
                flagProvider={FlagIconCssProvider}
            />
        </Typ2Container>
    );
}
