import * as React from 'react';
import { Typ35Container } from '../containers/Typ35Container';
import { FlagLabel } from '../FlagLabel';
import { FlagIconCssProvider } from '../../chart/FlagProvider';

interface IEtykietaTyp35Props {
    flag?: string;
    countryCode: string;
    label?: string | React.ReactElement;
}

export const EtykietaTyp35 = ({ flag, countryCode, label }: IEtykietaTyp35Props) => {
    return (
        <Typ35Container>
            <FlagLabel
                variant="typ35"
                countryCode={countryCode}
                flag={flag || FlagIconCssProvider}
                label={label}
            />
        </Typ35Container>
    )
};

export const Typ35Label = (firstLine: string, extraLine?: string) => {
    return (
        <div>
            {firstLine}
            {extraLine
                ? <div style={{ fontSize: '10px', margin: '-2px 0', width: '100%' }}>
                    {extraLine}
                </div>
                : null
            }
        </div>
    );
};
