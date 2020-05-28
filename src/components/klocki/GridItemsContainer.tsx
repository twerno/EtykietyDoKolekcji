import * as React from 'react';
import { FlexContainer } from '../utils/FlexContainer';

export interface IGridItemsContainerProps {
    items: React.ReactElement[];
}

export default ({ items }: IGridItemsContainerProps) =>
    <FlexContainer fullSize alignContent="center" flexWrap="wrap">
        <FlexContainer width="100%" alignItems="baseline" flexWrap="wrap" justifyContent="space-around">
            {items}
        </FlexContainer>
    </FlexContainer>;
