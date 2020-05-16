import * as React from 'react';
import { FlagIconCssProvider } from '../../chart/FlagProvider';
import { Typ20Container } from '../containers/Typ20Container';
import { FlagLabel } from '../FlagLabel';

interface IEtykietaTyp20Props {
    flag?: string;
    label?: string | React.ReactElement;
    countryCode: string;
}

export const EtykietaTyp20 = ({ flag, countryCode, label }: IEtykietaTyp20Props) => {
    return (
        <Typ20Container>
            <FlagLabel
                variant="typ20"
                countryCode={countryCode}
                flag={flag || FlagIconCssProvider}
                label={label}
            />
        </Typ20Container>
    )
};

export const Typ20Label = (firstLine: string, extraLine?: string) => {
    return (
        <div>
            {firstLine}
            {extraLine
                ? <div style={{ fontSize: '11px', width: '100%' }}>
                    {extraLine}
                </div>
                : null
            }
        </div>
    );
};