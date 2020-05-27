import * as React from 'react';
import styled from 'styled-components';
import { DoubleSideElementContext } from './DoubleSideElementController';

export const DoubleSideElementContainer: React.FC<{}> = ({ children }) => {

    return (
        <DoubleSideElementContext.Consumer>
            {side =>
                <DoubleSideElementContainerStyles side={side}>
                    {children}
                </DoubleSideElementContainerStyles>
            }
        </DoubleSideElementContext.Consumer>
    );
};

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface IDoubleSideElementContainerStylesProps {
    side: boolean;
}

const DoubleSideElementContainerStyles = styled.div<IDoubleSideElementContainerStylesProps>`
    height: 100%;
    width: 100%;
    position: absolute;

    display: flex;
    flex-direction: ${props => props.side ? 'row' : 'row-reverse'};
    justify-content: start;
    align-content: baseline;
    flex-wrap: wrap;
`;
