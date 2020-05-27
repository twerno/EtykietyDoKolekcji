import * as React from 'react';
import styled from 'styled-components';
import { IFlagProvider } from '../chart/FlagProvider';
import { FlagLabel } from './FlagLabel';
import Infobox from './Infobox';

export interface ILabelWithFlagProps {
    countryCode: string;
    infoList?: Array<string | Promise<string>>;
    flag: IFlagProvider | string;
    variant: 'regular' | 'typ35';
    label?: string | React.ReactElement;
}

export const LabelWithFlag = (props: ILabelWithFlagProps) => {
    const countryCode = props.countryCode;
    console.log(props);

    return (
        <LabelWithFlagContainer variant={props.variant}>
            <FlagLabel
                variant={props.variant}
                flag={props.flag}
                countryCode={countryCode}
                label={props.label}
            />

            <Infobox items={props.infoList} />

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
    justify-content: ${props => props.variant === 'regular' ? 'start' : 'space-between'};
    font-size:  ${props => props.variant === 'regular' ? '9px' : '8px'};
    flex: 1;

    padding: 5px;
    padding-top: 2px;
    min-width: ${props => props.variant === 'regular' ? '37mm' : '26mm'};
    min-height: ${props => props.variant === 'regular' ? '175px' : '104px'};
`;