import * as React from 'react';
import styled from 'styled-components';

export interface IScallingContainerProps {

}

export const ScallingContainer: React.FC<IScallingContainerProps> = (props) => {

    const ref = React.createRef<HTMLDivElement>();
    const [scale, setScale] = React.useState(1);

    React.useLayoutEffect(() => {

        if (ref.current) {
            const scale = computeScale(ref.current);
            setScale(scale);
        }

        const handler = () => {
            if (ref.current) {
                const scale = computeScale(ref.current);
                setScale(scale);
            }
        }

        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    });

    return (
        <ScallingStyledContainer ref={ref} scale={scale}>
            {props.children}
        </ScallingStyledContainer>
    );
}

const computeScale = (container: HTMLDivElement) => {

    return Math.min(
        window.innerWidth / container.offsetWidth,
        window.innerHeight / container.offsetHeight
    );

}

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface IScallingStyledContainerProps {
    scale: number;
}
const ScallingStyledContainer = styled.div<IScallingStyledContainerProps>`

    @media screen {
        transform-origin: top center;
        transform: scale(${props => props.scale});
    }
`;