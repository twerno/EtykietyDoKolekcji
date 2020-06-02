import * as React from 'react';
import styled, { css } from 'styled-components';
import { IFlagProvider } from '../../chart/FlagProvider';
import CountryConverterService from '../../service/CountryConverterService';
import Flag from '../klocki/Flag';

export interface IBasicLabelProps extends IBasicLabelContainerProps {
    flag: IFlagProvider | string;
    countryCode: string;
    children?: React.ReactNode;
}

/** Basic label: flag + name */
export const BasicLabel: React.FC<IBasicLabelProps> = (props) => {
    const namePl = props.children
        || CountryConverterService.countryCode2NamePl(props.countryCode);

    return (
        <BasicLabelContainer {...props}>

            <Flag
                countryCode={props.countryCode}
                flag={props.flag}
                width="65%"
            />

            <BasicLabelHeader {...props}>
                {namePl}
            </BasicLabelHeader>

        </BasicLabelContainer>
    );

};

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface IBasicLabelContainerProps {
    width?: number;
    fontSize: number;
    responsiveHeader?: boolean;
}

const BasicLabelContainer = styled.div<IBasicLabelContainerProps>`
    width: 100%;
    max-width: ${props => props.width ? `${props.width}mm` : 'unset'};
    font-size: ${props => props.fontSize}px;
    padding-top: 7px;

    display: flex;
    flex-direction: column;
    align-items: center;
            
    ${
    props => props.responsiveHeader
        ? css`height: 100%;`
        : ''
    }
`;

const BasicLabelHeader = styled.div<IBasicLabelContainerProps>`
    font-size: 1.5em;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    text-align: center;
                
    ${
    props => props.responsiveHeader
        ? css`
            display: inline-flex;
            flex: 1;
            align-items: center;
        `
        : css`padding: 0.6em 0;`
    }
`;
