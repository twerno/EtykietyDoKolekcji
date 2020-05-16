import * as React from 'react';
import { ILabelWithFlagProps, LabelWithFlag } from './LabelWithFlag';
import styled from 'styled-components';
import { A4TwoSideContainerContext, TwoSideComponent } from './containers/TwoSideLabelContainer';

export const VerticalLabel = (props: ILabelWithFlagProps) => {
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
    width: 30mm;

    &:last-child {
        border-left: ${props => !props.side ? '1px solid #d9d9d9' : undefined};
    }

    &:first-child {
        border-right: ${props => props.side ? undefined : 'none'};
    }
   
`;

interface ITwoSideVerticalLabelProps extends Omit<ILabelWithFlagProps, 'infoList' | 'variant'> {
    backSideInfo: Array<string | Promise<string>>;
    frontSideInfo: Array<string | Promise<string>>;
    variant?: 'regular' | 'typ35';
}

export const TwoSideVerticalLabel = (props: ITwoSideVerticalLabelProps) => {

    const frontComponent =
        <VerticalLabel
            countryCode={props.countryCode}
            flag={props.flag}
            variant={props.variant || 'typ35'}
            infoList={props.frontSideInfo}
        />;

    const backComponent =
        <VerticalLabel
            countryCode={props.countryCode}
            flag={props.flag}
            variant={props.variant || 'typ35'}
            infoList={props.backSideInfo}
        />;

    return (
        <TwoSideComponent
            front={frontComponent}
            back={backComponent}
        />
    );
}