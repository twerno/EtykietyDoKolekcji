import * as React from 'react';
import { IFlagProvider } from '../chart/FlagProvider';
import styled from 'styled-components';

interface IFlagProps extends IFlagStyleProps {
    flag: string | IFlagProvider;
    countryCode: string;
    width: string;
}

export default ({ flag, countryCode, width }: IFlagProps) => {

    const flagUrl = typeof flag === 'string'
        ? flag
        : flag?.provideFlagFor(countryCode).url;

    return <FlagContainer
        src={flagUrl}
        alt={countryCode || flagUrl}
        width={width}
    />;
}

interface IFlagStyleProps {
    width: string;
}

const FlagContainer = styled.img<IFlagStyleProps>`
    width: ${props => props.width};
    outline: 1px solid #cececee6;
`;