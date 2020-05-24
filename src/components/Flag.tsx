import * as React from 'react';
import { IFlagProvider } from '../chart/FlagProvider';
import styled from 'styled-components';

interface IFlagProps {
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

interface IFlagContainerProps {
    width: string;
}

const FlagContainer = styled.img<IFlagContainerProps>`
    width: ${props => props.width};
    outline: 1px solid #cececee6;
    /* flex: 0 1 auto;
    margin-top: 5%; */
`;