import * as React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../utils/FlexContainer';

export interface IGridItemsContainerProps extends IGridContainerStyledProps {
    items: React.ReactElement[];
    mode: 'flexBox' | 'grid';
}

export default (props: IGridItemsContainerProps) =>
    props.mode === 'flexBox'
        ? <FlexBoxContainer {...props} />
        : <GridContainer{...props} />;

const FlexBoxContainer = ({ items }: IGridItemsContainerProps) =>
    <FlexContainer fullSize alignContent="center" flexWrap="wrap">
        <FlexContainer width="100%" alignItems="baseline" flexWrap="wrap" justifyContent="space-around">
            {items}
        </FlexContainer>
    </FlexContainer>;


const GridContainer = ({ items, width }: IGridItemsContainerProps) =>
    <FlexContainer fullSize alignContent="center" flexWrap="wrap">
        <GridContainerStyled width={width}>
            {items.map(item => <li>{item}</li>)}
        </GridContainerStyled>
    </FlexContainer>;


interface IGridContainerStyledProps {
    width: number;
}

// https://stackoverflow.com/a/46099319
const GridContainerStyled = styled.ul<IGridContainerStyledProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, ${props => props.width}mm);
    justify-content: center;

    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
`;