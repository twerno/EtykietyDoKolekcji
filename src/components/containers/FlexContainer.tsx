import styled, { CSSObject, css } from "styled-components";
import StyledHelper from "../utils/StyledHelper";

export interface IFlexContainerProps {
    center?: boolean;
    fullSize?: boolean;
    position?: 'relative' | 'absolute';

    display?: 'block' | 'flex';
    margin?: string | number;
    padding?: string | number;
    height?: string | number;

    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap';
    justifyContent?: 'flex-start' | 'center' | 'space-between';
    alignItems?: 'base-line' | 'flex-start' | 'center';
    alignContent?: 'flex-start' | 'space-around';
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | string;
    flex?: string;

    overflow?: 'visible' | 'hidden';
    overflowX?: 'visible' | 'hidden';
    overflowY?: 'visible' | 'hidden';
}

export const FlexContainer = styled.div<IFlexContainerProps>(props => css`
    display: flex;
    `,

    StyledHelper.cssMerge([
        {
            condition: _ => true,
            formatter: props => ({
                display: props.display,
                margin: StyledHelper.addPxToNumber(props.margin),
                padding: StyledHelper.addPxToNumber(props.padding),
                height: StyledHelper.addPxToNumber(props.height),
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
