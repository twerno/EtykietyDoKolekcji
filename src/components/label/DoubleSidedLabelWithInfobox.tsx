import * as React from 'react';
import { DoubleSidedElement } from '../DoubleSidedElement/DoubleSidedElement';
import { IInfoboxProps } from '../klocki/Infobox';
import { ILabelWithInfoboxProps, LabelWithInfobox } from './LabelWithInfobox';
import styled, { css } from 'styled-components';
import { DoubleSidedElementContext } from '../DoubleSidedElement/DoubleSidedElementController';

interface IDoubleSidedLabelWithInfoboxProps extends Omit<ILabelWithInfoboxProps, 'infoList'>,
    IDoubleSidedLabelWithInfoboxContainerProps {
    backSideInfo: IInfoboxProps;
    frontSideInfo: IInfoboxProps;
    sharedInfobox: IInfoboxProps;
}

export const DoubleSidedLabelWithInfobox = (props: IDoubleSidedLabelWithInfoboxProps) => {

    const frontComponent =
        <LabelWithInfobox
            {...props}
            infoBoxes={[props.sharedInfobox, props.frontSideInfo]}
        />;

    const backComponent =
        <LabelWithInfobox
            {...props}
            infoBoxes={[props.sharedInfobox, props.backSideInfo]}
        />;

    return (
        <DoubleSidedElementContext.Consumer>
            {side =>
                <DoubleSidedLabelWithInfoboxContainer {...props} side={side}>
                    <DoubleSidedElement
                        front={frontComponent}
                        back={backComponent}
                    />
                </DoubleSidedLabelWithInfoboxContainer>
            }
        </DoubleSidedElementContext.Consumer>
    );
}

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface IDoubleSidedLabelWithInfoboxContainerProps {
    border?: boolean;
}

const DoubleSidedLabelWithInfoboxContainer = styled.div<IDoubleSidedLabelWithInfoboxContainerProps & { side: boolean }>`
    ${
    props => props.border
        ? css`
            border-right: 1px solid #d9d9d9;
            height: 100%;

            &:last-child {
                border-left: ${!props.side ? '1px solid #d9d9d9' : undefined};
            }

            &:first-child {
                border-right: ${props.side ? undefined : 'none'};
            }
        `
        : ''
    }
`;
