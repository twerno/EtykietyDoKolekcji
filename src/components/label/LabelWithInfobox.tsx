import * as React from 'react';
import Infobox, { IInfoboxProps } from '../klocki/Infobox';
import { BasicLabel, IBasicLabelProps } from './BasicLabel';
import styled, { css } from 'styled-components';

export interface ILabelWithInfoboxProps extends
    Omit<IBasicLabelProps, 'width'>,
    ILabelWithInfoboxContainerProps {
    infoBoxes?: IInfoboxProps[];
}

export const LabelWithInfobox = (props: ILabelWithInfoboxProps) => {
    const [id] = React.useState(Math.random());

    const infoboxes = props.infoBoxes?.map(
        (infobox, idx) =>
            <Infobox key={`${id}_${idx}`} {...infobox} />
    );

    return (
        <LabelWithInfoboxContainer {...props}>
            <BasicLabel {...props} width={undefined} />
            {infoboxes}
        </LabelWithInfoboxContainer>
    )
};

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface ILabelWithInfoboxContainerProps {
    width: number | undefined;
    fontSize: number;
    paddingTop: 'none' | 'single';
}

const LabelWithInfoboxContainer = styled.div<ILabelWithInfoboxContainerProps>`
    font-size: ${props => props.fontSize}px;

    ${
    props => props.width
        ? css`width: ${props.width}mm;`
        : ''
    }

    padding-top: ${props => props.paddingTop === 'single' ? '10px' : '0'};
`;
