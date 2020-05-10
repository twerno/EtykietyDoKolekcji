import * as React from 'react';
import { FlagIconCssProvider } from '../../chart/FlagProvider';
import { Typ20Container } from '../containers/Typ20Container';
import { FlagLabel } from '../FlagLabel';

interface IEtykietaTyp20Props {
    flag?: string;
    countryCode: string;
}

export const EtykietaTyp20 = ({ flag, countryCode }: IEtykietaTyp20Props) => {
    return (
        <Typ20Container>
            <FlagLabel
                variant="typ20"
                countryCode={countryCode}
                flag={flag || FlagIconCssProvider}
            />
        </Typ20Container>
    )
};
