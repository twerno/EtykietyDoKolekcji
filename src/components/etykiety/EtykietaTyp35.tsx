import * as React from 'react';
import OkienkoDlaStrony_168x214 from '../klocki/OkienkoDlaStrony_168x214';
import { BasicLabel, IBasicLabelProps } from '../label/BasicLabel';
import { FlagIconCssProvider } from '../../chart/FlagProvider';
import { WithOptional } from '../../helper/TypeUtils';

interface IEtykietaTyp35Props extends WithOptional<IBasicLabelProps, 'fontSize' | 'flag' | 'countryCode'> {

}

const EtykietaTyp35: React.FC<IEtykietaTyp35Props> = (props) =>
    <OkienkoDlaStrony_168x214.Typ35>
        <BasicLabel
            flag={FlagIconCssProvider}
            fontSize={8}
            countryCode=""
            responsiveHeader
            {...props}
        />
    </OkienkoDlaStrony_168x214.Typ35>;

export default EtykietaTyp35;