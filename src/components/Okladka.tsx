import * as React from 'react';
import styled from 'styled-components';
import { MapChart, MinimapPosition } from '../chart/chart';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import { CountryLabelBig } from './CountryLabelBig';
import { FlexContainer } from './FlexContainer';

export interface IOkladkaCountryProps {
    countryCode: string;
    label?: React.ReactNode;
    info?: Array<string | Promise<string>>;
    showPin?: true;
}

export interface IOkladkaProps {
    direction?: 'column' | 'row';
    countryList: IOkladkaCountryProps[];
    includeInView?: string[];
    minimap?: MinimapPosition;
    mode?: 'mapOnly' | 'labelsOnly';
}

export const Okladka = (props: IOkladkaProps) => {

    const labelFlexDirections = props.direction === 'column'
        ? 'row'
        : 'column';

    const showMapChart = props.mode === undefined || props.mode === 'mapOnly';
    const showLabels = props.mode === undefined || props.mode === 'labelsOnly';

    return (
        <OkladkaContainer {...props}>
            {showMapChart && <MapChart
                countryDataList={props.countryList}
                includeInView={props.includeInView}
                minimap={props.minimap}
                flagProvider={FlagIconCssProvider}
            />
            }

            {showLabels && <FlexContainer direction={labelFlexDirections}>
                {
                    props.countryList.map(data =>
                        <CountryLabelBig
                            key={data.countryCode}
                            countryData={data}
                            flagProvider={FlagIconCssProvider}
                        />
                    )
                }
            </FlexContainer>
            }
        </OkladkaContainer>
    );
}

export const OkladkaContainer = styled.div<IOkladkaProps>`
    margin-top: 10mm;
    width: 18.5cm;
    height: 12cm;
    border: 1px #cecece solid;
    overflow: hidden;

    display: flex;
    flex-direction: ${props => props.direction ?? 'column'};
    flex-wrap: wrap;
`;
