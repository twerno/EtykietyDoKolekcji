import * as React from 'react';
import styled from 'styled-components';
import { DoubleSidedElementContext } from './DoubleSidedElementController';

export const DoubleSidedElementContainer: React.FC<{}> = ({ children }) => {

    return (
        <DoubleSidedElementContext.Consumer>
            {side =>
                <DoubleSidedElementContainerStyles side={side}>
                    {children}
                </DoubleSidedElementContainerStyles>
            }
        </DoubleSidedElementContext.Consumer>
    );
};

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface IDoubleSidedElementContainerStylesProps {
    side: boolean;
}

const DoubleSidedElementContainerStyles = styled.div<IDoubleSidedElementContainerStylesProps>`
    height: 100%;
    width: 100%;
    position: absolute;

    display: flex;
    flex-direction: ${props => props.side ? 'row' : 'row-reverse'};
    justify-content: start;
    align-content: baseline;
    flex-wrap: wrap;
`;
