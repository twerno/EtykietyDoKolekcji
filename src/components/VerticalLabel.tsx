import * as React from 'react';
import styled from 'styled-components';
import { IFlagProvider } from '../chart/FlagProvider';
import CountryConverterService from '../service/CountryConverterService';
import { A4TwoSideContainerContext, TwoSideComponent } from './containers/TwoSideLabelContainer';
import Flag from './Flag';
import Infobox, { IInfoboxProps } from './Infobox';

interface IVerticalLabelProps {
    flag: IFlagProvider | string;
    countryCode: string;
    fontSize: number;
    width: number;
    label?: string | React.ReactElement;
    infoBoxes?: IInfoboxProps[];
}

export const VerticalLabel = (props: IVerticalLabelProps) => {
    const { countryCode } = props;
    const namePl = props.label || CountryConverterService.countryCode2NamePl(countryCode);

    return (
        <A4TwoSideContainerContext.Consumer>
            {side =>
                <VerticalLabelContainer {...props} side={side}>
                    <Flag
                        countryCode={props.countryCode}
                        flag={props.flag}
                        width="65%"
                    />

                    <div className="header">
                        {namePl}
                    </div>

                    {
                        props.infoBoxes?.map(
                            (infobox, idx) =>
                                <Infobox key={`${countryCode}_${idx}`} {...infobox} />
                        )
                    }

                </VerticalLabelContainer>
            }
        </A4TwoSideContainerContext.Consumer>
    )
};

const VerticalLabelContainer = styled.div<{ side: boolean } & IVerticalLabelProps>`
    height: calc(100% - 20px);
    margin: 10px 0px;
    border-right: 1px solid #d9d9d9;
    width: ${props => props.width}mm;
    font-size: ${props => props.fontSize}px;

    &:last-child {
        border-left: ${props => !props.side ? '1px solid #d9d9d9' : undefined};
    }

    &:first-child {
        border-right: ${props => props.side ? undefined : 'none'};
    }

    .header {
        font-size: 1.3em;
        font-family: 'Inter', sans-serif; 
        font-weight: bold;
        margin: 5px 0;
    }
`;

interface ITwoSideVerticalLabelProps extends Omit<IVerticalLabelProps, 'infoList'> {
    backSideInfo: IInfoboxProps;
    frontSideInfo: IInfoboxProps;
    sharedInfobox: IInfoboxProps;
    width: number;
    fontSize: number;
}

export const TwoSideVerticalLabel = (props: ITwoSideVerticalLabelProps) => {

    const frontComponent =
        <VerticalLabel
            {...props}
            infoBoxes={[props.sharedInfobox, props.frontSideInfo]}
        />;

    const backComponent =
        <VerticalLabel
            {...props}
            infoBoxes={[props.sharedInfobox, props.backSideInfo]}
        />;

    return (
        <TwoSideComponent
            front={frontComponent}
            back={backComponent}
        />
    );
}