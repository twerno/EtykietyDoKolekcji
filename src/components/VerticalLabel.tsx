import * as React from 'react';
import { ILabelWithFlagProps, LabelWithFlag } from './LabelWithFlag';
import styled from 'styled-components';
import { A4TwoSideContainerContext } from './containers/TwoSideLabelContainer';

export default (props: ILabelWithFlagProps) => {
    return (
        <A4TwoSideContainerContext.Consumer>
            {side =>
                <VerticalLabelContainer side={side}>
                    <LabelWithFlag {...props} />
                </VerticalLabelContainer>
            }
        </A4TwoSideContainerContext.Consumer>
    )
};

const VerticalLabelContainer = styled.div<{ side: boolean }>`
    height: calc(100% - 20px);
    margin: 10px 0px;
    border-right: 1px solid #d9d9d9;

    &:last-child {
        border-left: ${props => !props.side ? '1px solid #d9d9d9' : undefined};
    }

    &:first-child {
        border-right: ${props => props.side ? undefined : 'none'};
    }
   
`;
