import styled from "styled-components";

export interface IFlexContainerProps {
    direction: 'column' | 'row'
}

export const FlexContainer = styled.div<IFlexContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction ?? 'column'};
    flex-wrap: wrap;
`;