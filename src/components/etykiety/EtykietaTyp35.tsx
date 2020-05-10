import * as React from 'react';
import { Typ35Container } from '../containers/Typ35Container';
import { FlagLabel } from '../FlagLabel';
import { FlagIconCssProvider } from '../../chart/FlagProvider';

interface IEtykietaTyp35Props {
    flag?: string;
    countryCode: string;
}

export const EtykietaTyp35 = ({ flag, countryCode }: IEtykietaTyp35Props) => {
    return (
        <Typ35Container>
            <FlagLabel
                variant="typ35"
                countryCode={countryCode}
                flag={flag || FlagIconCssProvider}
            />
        </Typ35Container>
    )
};
