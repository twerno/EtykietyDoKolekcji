import styled from 'styled-components';
import * as React from 'react';
import { MapChart, MinimapPosition } from '../chart/chart';
import { FlexContainer } from './FlexContainer';
import { CountryLabel } from './CountryLabel';

export interface IOkladkaProps {
    direction?: 'column' | 'row';
    labelList: Array<{ countryCode: string, label?: React.ReactNode }>;
    zoomToCountriesList?: string[];
    minimap?: MinimapPosition;
}

export const Okladka = (props: IOkladkaProps) => {

    const labelFlexDirections = props.direction === 'column'
        ? 'row'
        : 'column';

    return (
        <OkladkaContainer {...props}>
            <MapChart
                labelList={props.labelList}
                zoomToCountriesList={props.zoomToCountriesList}
                minimap={props.minimap}
            />
            <FlexContainer direction={labelFlexDirections}>
                {
                    props.labelList.map(data =>
                        <CountryLabel
                            key={`${data.countryCode}`}
                            countryCode={data.countryCode}
                            direction={props.direction}
                        >
                            {data.label}
                        </CountryLabel>
                    )
                }
            </FlexContainer>
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
`;
