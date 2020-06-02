import styled, { css } from "styled-components";
import StyledHelper from "../../helper/StyledHelper";

export interface IFlexContainerProps {
    center?: boolean;
    fullSize?: boolean;
    position?: 'relative' | 'absolute' | 'fixed';

    display?: 'block' | 'flex';
    margin?: string | number;
    padding?: string | number;
    height?: string | number;
    width?: string | number;

    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap';
    justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-evenly' | 'space-around' | 'flex-end';
    alignItems?: 'baseline' | 'flex-start' | 'center';
    alignContent?: 'flex-start' | 'space-around' | 'space-between' | 'space-evenly' | "baseline" | "center";
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | string;
    flex?: string;

    overflow?: 'visible' | 'hidden';
    overflowX?: 'visible' | 'hidden' | 'scroll';
    overflowY?: 'visible' | 'hidden' | 'scroll';

    isPrintable?: boolean;
}

export const FlexContainer = styled.div<IFlexContainerProps>(props => css`
    display: flex;

    @media print {
        display: ${props.isPrintable === false ? 'none' : props.theme.display || 'flex'};
    };
    `,

    StyledHelper.cssMerge([
        {
            condition: _ => true,
            formatter: props => ({
                display: props.display,
                margin: StyledHelper.addPxToNumber(props.margin),
                padding: StyledHelper.addPxToNumber(props.padding),
                height: StyledHelper.addPxToNumber(props.height),
                width: StyledHelper.addPxToNumber(props.width),
                position: props.position,

                flexDirection: props.flexDirection,
                flexWrap: props.flexWrap,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems,
                alignContent: props.alignContent,
                flexGrow: props.flexGrow,
                flexShrink: props.flexShrink,
                flexBasis: props.flexBasis,
                flex: props.flex,

                overflow: props.overflow,
                overflowX: props.overflowX,
                overflowY: props.overflowY,
            })
        },
        {
            condition: props => !!props.center,
            formatter: _ => ({
                justifyContent: 'center',
                alignContent: 'center'
            })
        },
        {
            condition: props => !!props.fullSize,
            formatter: _ => ({
                width: '100%',
                height: '100%',
            })
        }
    ])
);
