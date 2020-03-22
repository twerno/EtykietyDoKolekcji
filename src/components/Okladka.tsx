import * as React from 'react';
import styled from 'styled-components';
import { MapChart, MinimapPosition } from '../chart/chart';
import { FlagIconCssProvider } from '../chart/FlagProvider';
import { CountryLabelBig } from './CountryLabelBig';
import { FlexContainer } from './FlexContainer';

export interface IOkladkaProps {
    direction?: 'column' | 'row';
    labelList: Array<{ countryCode: string, label?: React.ReactNode, info?: string[] }>;
    zoomToCountriesList?: string[];
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
                labelList={props.labelList}
                zoomToCountriesList={props.zoomToCountriesList}
                minimap={props.minimap}
            />
            }

            {showLabels && <FlexContainer direction={labelFlexDirections}>
                {
                    props.labelList.map(data =>
                        <CountryLabelBig
                            key={data.countryCode}
                            countryCode={data.countryCode}
                            flagProvider={FlagIconCssProvider}
                            info={data.info}
                        >
                            {data.label}
                        </CountryLabelBig>
                    )
                }
            </FlexContainer>
            }
        </OkladkaContainer>
    );
}

export const OkladkaContainer = styled.div<IOkladkaProps>`
    margin: 0;
    width: 18.5cm;
    height: 12cm;
    border: 1px #cecece solid;
    overflow: hidden;

    display: flex;
    flex-direction: ${props => props.direction ?? 'column'};
    flex-wrap: wrap;
`;
