import * as React from 'react';
import { IOkladkaProps, Okladka } from "./Okladka";
import { A4Page } from './A4Page';

export interface IOkładkaA4Props extends IOkladkaProps {

}

export const OkładkaA4 = (props: IOkładkaA4Props) => {
    return (
        <A4Page>
            <Okladka
                {...props}
                direction="row"
                mode="mapOnly"
            />

            <Okladka
                {...props}
                direction="column"
                mode="labelsOnly"
            />
        </A4Page>
    );
}