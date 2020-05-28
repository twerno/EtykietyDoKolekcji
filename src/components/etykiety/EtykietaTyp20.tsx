import * as React from 'react';
import { FlagIconCssProvider } from '../../chart/FlagProvider';
import { WithOptional } from '../../helper/TypeUtils';
import OkienkoDlaStrony_168x214 from '../klocki/OkienkoDlaStrony_168x214';
import { BasicLabel, IBasicLabelProps } from '../label/BasicLabel';

interface IEtykietaTyp35Props extends WithOptional<IBasicLabelProps, 'fontSize' | 'flag' | 'countryCode'> {

}

const EtykietaTyp20: React.FC<IEtykietaTyp35Props> = (props) =>
    <OkienkoDlaStrony_168x214.Typ20>
        <BasicLabel
            flag={FlagIconCssProvider}
            fontSize={11}
            countryCode=""
            responsiveHeader
            {...props}
        />
    </OkienkoDlaStrony_168x214.Typ20>;

export default EtykietaTyp20;