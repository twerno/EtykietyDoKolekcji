import * as React from 'react';
import { A4Page } from '../components/A4Page';
import OkienkaNaStronie_203x257 from '../components/klocki/OkienkoDlaStrony_203x257';
import { LazyComponent } from '../components/utils/LazyComponent';
import { IOkladkaMapaProps, OkladkaMapa } from './OkladkaMapa';
import { IOkladkaOpisyProps, OkladkaOpisy } from './OkladkaOpisy';

export interface IOkładkaA4Props extends IOkladkaMapaProps, IOkladkaOpisyProps {

}

export const OkładkaA4 = (props: IOkładkaA4Props) => {
    return (
        <A4Page>
            <LazyComponent>

                <OkienkaNaStronie_203x257.Typ2>
                    <OkladkaMapa {...props} />
                </OkienkaNaStronie_203x257.Typ2>

                <OkienkaNaStronie_203x257.Typ2>
                    <OkladkaOpisy {...props} />
                </OkienkaNaStronie_203x257.Typ2>

            </LazyComponent>
        </A4Page>
    );
}