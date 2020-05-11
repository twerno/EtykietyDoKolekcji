import styled, { CSSObject } from "styled-components";

export interface IFlexContainerProps {
    center?: boolean;
    side?: 'front' | 'back';
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

export const FlexContainer = styled.div<IFlexContainerProps>(props => (
    {
        display: props.display || 'flex',
        margin: addPxToNumber(props.margin),
        padding: addPxToNumber(props.padding),
        height: addPxToNumber(props.height),
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
        overflowY: props.overflowY
    }),
    cssMerge([
        {
            condition: props => !!props.center,
            formatter: _ => ({
                justifyContent: 'center',
                alignContent: 'center'
            })
        },
        {
            condition: props => !!props.side,
            formatter: props => (
                (isFront): CSSObject => ({
                    display: 'flex',
                    flexDirection: isFront ? 'row' : 'row-reverse',
                    justifyContent: isFront ? 'flex-start' : 'end',
                    alignContent: 'normal'
                })
            )(props.side === 'front')
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

function addPxToNumber(source: any): any {
    return typeof source === 'number'
        ? `${source}px`
        : source;
}

function cssMerge<Props>(items: Array<{ condition: (props: Props) => boolean, formatter: (props: Props) => CSSObject }>) {
    return (props: Props) => items
        .filter(item => item.condition(props))
        .map(item => item.formatter(props))
        .reduce((prev, curr) => ({ ...prev, ...curr }), {});
}
