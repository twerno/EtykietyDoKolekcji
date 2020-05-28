import * as React from 'react';
import { Okienko } from './Okienko';

/**
 * Strona na banknoty o wymiarach 203 x 257 mm
 */
export default {
    Typ2: (props: any) => <Okienko width={185} height={120} {...props} />,
    Typ3: (props: any) => <Okienko width={185} height={85} {...props} />,
};
