import * as React from 'react';
import { Okienko } from './Okienko';

/**
 * Strona na monety o wymiarach 168 x 214 mm
 */
export default {
    Typ20: (props: any) => <Okienko width={35} height={40} {...props} />,
    Typ35: (props: any) => <Okienko width={27} height={27} {...props} />,
};
