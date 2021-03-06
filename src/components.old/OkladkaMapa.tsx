import * as React from 'react';
import styled from 'styled-components';
import { MapChart, MinimapPosition } from '../chart/chart';
import { FlagIconCssProvider } from '../chart/FlagProvider';

export interface IOkladkaCountryProps {
    countryCode: string;
    label?: React.ReactElement | string | { sortName: string, renderer: React.ReactElement };
    info?: Array<string | Promise<string>>;
    showPin?: true;
}

export interface IOkladkaMapaProps {
    countryList: IOkladkaCountryProps[];
    includeInView?: string[];
    minimap?: MinimapPosition;
    mapLabel?: string;
}

export const OkladkaMapa = (props: IOkladkaMapaProps) => {

    return (
        <>
            {
                props.mapLabel
                    ? (
                        <LabelContainer>
                            <Label>
                                {props.mapLabel}
                            </Label>
                        </LabelContainer>
                    )
                    : null
            }

            <MapChart
                countryDataList={props.countryList}
                includeInView={props.includeInView}
                minimap={props.minimap}
                flagProvider={FlagIconCssProvider}
            />
        </>
    );
}

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

const LabelContainer = styled.div`
    position: absolute;
    z-index: 1000;
    width: 100%;
    display: flex;
`;

const Label = styled.div`
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin: 8px;
    padding: 5px 10px;
    border-radius: 6px;
    border: 1px solid #00000061;
    background-color: white;
    box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.51);
`;



export function isRendererWithSortName(x: any): x is { sortName: string, renderer: React.ReactElement } {
    return !!x && typeof x.sortName === 'string' && (x.renderer instanceof Object);
}