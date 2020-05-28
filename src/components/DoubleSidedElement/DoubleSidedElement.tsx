import * as React from 'react';
import { DoubleSidedElementContext } from './DoubleSidedElementController';

interface IDoubleSidedElementProps {
    front: React.ReactElement;
    back?: React.ReactElement;
}

export const DoubleSidedElement = ({ front, back }: IDoubleSidedElementProps) =>
    <DoubleSidedElementContext.Consumer>
        {
            side => side
                ? <>{front}</>
                : <>{back || front}</>
        }
    </DoubleSidedElementContext.Consumer>;
