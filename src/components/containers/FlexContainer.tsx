import styled, { CSSObject, css } from "styled-components";

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

export const FlexContainer = styled.div<IFlexContainerProps>(props => css`
    position: relative;
    display: flex;

    @media screen {
        &::before {
            content: ${pp => props.side ? `'${props.side}'` : undefined};
            position: absolute;
            margin-top: -15px;
            margin-left: -15px;
            background: white;
            box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.51);
            z-index: 1000;
            border: 1px solid black;
            padding: 5px 10px;
            border-radius: 8px;
            left: 0px;
            transition: all 0.2s;
        }

        &:hover::before {
            background: #a3ffa3f0;
        }
    }
    `,

    cssMerge([
        {
            condition: _ => true,
            formatter: props => ({
                display: props.display,
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
