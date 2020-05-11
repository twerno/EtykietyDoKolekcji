import * as React from 'react';
import styled from 'styled-components';
import { IFlagProvider } from '../chart/FlagProvider';
import { FlagLabel, LabelWithFlagContainerVariants } from './FlagLabel';
import { AsyncTextRenderer } from './utils/AsyncTextRenderer';

export interface ICountryLabelProps {
    countryCode: string;
    infoList?: Array<string | Promise<string>>;
    flagUrl?: string;
    flagProvider: IFlagProvider;
    variant: 'regular' | 'typ35';
    label?: string;
}

export const LabelWithFlag = (props: ICountryLabelProps) => {
    const countryCode = props.countryCode;

    return (
        <LabelWithFlagContainer variant={props.variant}>
            <FlagLabel
                variant={props.variant}
                flag={props.flagProvider}
                countryCode={countryCode}
                label={props.label}
            />
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
    variant: 'regular' | 'typ35';
}

const LabelWithFlagContainer = styled.div<ILabelWithFlagContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: ${props => props.variant === 'regular' ? '0.5 0' : '0 0'};

    padding: 5px;
    min-width: ${props => props.variant === 'regular' ? 'initial' : '85px'};
    min-height: ${props => props.variant === 'regular' ? 'initial' : '100px'};

    ul.info {
        margin: 0;
        list-style: none;
        padding: 0;
        font-size: 9px;
        color: #7b7b7b99;
        margin-left: -5px;
        margin-right: -5px;
        flex: 1 1 auto;
    }

    ul.info li:not(':first-child') {
        margin-top: 1px;
    }
`;