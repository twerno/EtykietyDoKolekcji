import * as React from 'react';
import { A4Page } from './containers/A4Page';
import { IOkladkaMapaProps, OkladkaMapa } from './OkladkaMapa';
import { IOkladkaOpisyProps, OkladkaOpisy } from './OkladkaOpisy';
import { LazyComponent } from '../components/utils/LazyComponent';

export interface IOkładkaA4Props extends IOkladkaMapaProps, IOkladkaOpisyProps {

}

export const OkładkaA4 = (props: IOkładkaA4Props) => {
    return (
        <A4Page>
            <LazyComponent>
                <OkladkaMapa {...props} />
                <OkladkaOpisy {...props} />
            </LazyComponent>
        </A4Page>
    );
}