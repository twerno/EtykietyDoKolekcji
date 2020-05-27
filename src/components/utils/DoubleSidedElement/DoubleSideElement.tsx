import * as React from 'react';
import { DoubleSideElementContext } from './DoubleSideElementController';

interface IDoubleSideElementProps {
    front: React.ReactElement;
    back: React.ReactElement;
}

export const DoubleSideElement = ({ front, back }: IDoubleSideElementProps) =>
    <DoubleSideElementContext.Consumer>
        {
            side => side
                ? <>{front}</>
                : <>{back}</>
        }
    </DoubleSideElementContext.Consumer>;
