import * as React from 'react';
import { A4Page } from './A4Page';
import { IOkladkaMapaProps, OkladkaMapa } from './OkladkaMapa';
import { IOkladkaOpisyProps, OkladkaOpisy } from './OkladkaOpisy';

export interface IOkładkaA4Props extends IOkladkaMapaProps, IOkladkaOpisyProps {

}

export const OkładkaA4 = (props: IOkładkaA4Props) => {
    return (
        <A4Page>
            <OkladkaMapa {...props} />
            <OkladkaOpisy {...props} />
        </A4Page>
    );
}