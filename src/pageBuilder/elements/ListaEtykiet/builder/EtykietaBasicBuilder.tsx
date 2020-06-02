import * as React from 'react';
import EtykietaTyp20 from '../../../../components/etykiety/EtykietaTyp20';
import { FlagIconCssProvider } from '../../../../chart/FlagProvider';
import { IEtykietaBasicSchema } from '../ListaEtykietSchema';
import EtykietaTyp35 from '../../../../components/etykiety/EtykietaTyp35';

export interface IEtykietaBasicBuilderProps {
    data: IEtykietaBasicSchema;
}

export default ({ data }: IEtykietaBasicBuilderProps) => {

    return data.typ === 'typ20'
        ? (
            <EtykietaTyp20
                countryCode={data.countryCode}
                flag={data.customImgUrl || FlagIconCssProvider}
                fontSize={data.fontSize}
            >
                {data.customLabel}
            </EtykietaTyp20>
        )
        : (
            <EtykietaTyp35
                countryCode={data.countryCode}
                flag={data.customImgUrl || FlagIconCssProvider}
                fontSize={data.fontSize}
            >
                {data.customLabel}
            </EtykietaTyp35>
        );
}

