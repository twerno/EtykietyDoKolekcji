import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

type IVariantMap<T extends string = string> = { [key in T]: (CSSObject | FlattenSimpleInterpolation) };

export const variant = <T extends string = string>(variants: IVariantMap<T>) => {
    return (props: { variant: T }) => {
        return variants[props.variant];
    };
};
