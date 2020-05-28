import { CSSObject, FlattenSimpleInterpolation } from "styled-components";

export default {
    addPxToNumber,
    cssMerge
}

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

type IVariantMap<T extends string = string> = { [key in T]: (CSSObject | FlattenSimpleInterpolation) };

export const variant = <T extends string = string>(variants: IVariantMap<T>) => {
    return (props: { variant: T }) => {
        return variants[props.variant];
    };
};