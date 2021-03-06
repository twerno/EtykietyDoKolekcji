import * as React from 'react';
import styled from 'styled-components';

export const DoubleSidedElementContext = React.createContext(false);

export const DoubleSidedElementController: React.FC<{}> = ({ children }) => {

    // aktywna strona
    // true === front
    const [side, setSide] = React.useState<boolean>(true);

    return (
        <DoubleSidedElementContainer
            side={side ? 'front' : 'back'}
            onClick={_ => setSide(v => !v)}
        >

            <DoubleSidedElementRenderer
                render="front"
                currentSide={side}
                children={children}
            />

            <DoubleSidedElementRenderer
                render="back"
                currentSide={side}
                children={children}
            />

        </DoubleSidedElementContainer>
    );
};

interface IDoubleSidedElementRendererProps {
    render: 'front' | 'back';
    currentSide: boolean;
}

const DoubleSidedElementRenderer: React.FC<IDoubleSidedElementRendererProps> =
    ({ render, currentSide, children }) => {

        // obrot elementu
        // back zawsze obrocony +180deg
        const rotate = (currentSide ? 0 : 180)
            + (render === 'back' ? 180 : 0);

        return (
            <DoubleSidedElementContext.Provider value={render === 'front'}>
                <SingleSideElementContainer
                    rotate={rotate}
                    printable={!currentSide}
                >
                    {children}
                </SingleSideElementContainer>
            </DoubleSidedElementContext.Provider>
        );
    };

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface IDoubleSideControllerContainerProps {
    side: 'front' | 'back';
}

const DoubleSidedElementContainer = styled.div<IDoubleSideControllerContainerProps>`
    position: relative;
    height: 100%;
    width: 100%;
    perspective: 3000px;
                
    @media screen {
        &::before {
            content: ${props => props.side ? `'${props.side}'` : undefined};
            position: absolute;
            margin-top: -15px;
            margin-left: -15px;
            background: white;
            box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.51);
            z-index: 1000;
            border: 1px solid black;
            padding: 5px 10px;
            border-radius: 8px;
            left: 0px;
            transition: all 0.2s;
        }

        &:hover::before {
            background: #a3ffa3f0;
        }
    }
`;

// //////////////////////////////////////////////////////
// containers
// //////////////////////////////////////////////////////

interface ISingleSideElementContainerProps {
    rotate: number;
    printable: boolean;
}

const SingleSideElementContainer = styled.div<ISingleSideElementContainerProps>`
    position: absolute;
    left: 0;
    height: 100%;
    width:  100%;
    display:inline-flex;

    backface-visibility: hidden;
    transition: transform .5s;
    transform-style: preserve-3d;
    
    background: white;
    transform: rotateY(${props => props.rotate}deg);

    @media print {
        display: ${props => props.printable ? undefined : 'none'};
    }
`;