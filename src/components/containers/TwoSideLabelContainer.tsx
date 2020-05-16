import * as React from 'react';
import styled from 'styled-components';
import { A4Page } from './A4Page';

export const A4TwoSideContainerContext = React.createContext(false);

export const A4TwoSideMasterContainer: React.FC<{}> = ({ children }) => {
    const [side, setSide] = React.useState<boolean>(true);

    return (
        <A4Page position='relative'>
            <A4TwoSideMasterStyledContainer
                side={side ? 'front' : 'back'}
                onClick={_ => setSide(v => !v)}
            >
                <A4TwoSideContainerContext.Provider value={true}>
                    <SideMasterContainer rotate={side ? 0 : 180} printable={side}>
                        {children}
                    </SideMasterContainer>

                </A4TwoSideContainerContext.Provider>

                <A4TwoSideContainerContext.Provider value={false}>
                    <SideMasterContainer rotate={side ? 180 : 360} printable={!side}>
                        {children}
                    </SideMasterContainer>
                </A4TwoSideContainerContext.Provider>

            </A4TwoSideMasterStyledContainer>
        </A4Page>
    );
};

export const TwoSideContainer: React.FC<{}> = ({ children }) => {

    return (
        <A4TwoSideContainerContext.Consumer>
            {side =>
                <TwoSideStyledContainer side={side ? 'front' : 'back'}>
                    {children}
                </TwoSideStyledContainer>
            }
        </A4TwoSideContainerContext.Consumer>
    );
}

interface ITwoSideComponentProps {
    front: React.ReactElement;
    back: React.ReactElement;
}

export const TwoSideComponent = ({ front, back }: ITwoSideComponentProps) => {
    return (
        <A4TwoSideContainerContext.Consumer>
            {side => side
                ? <>{front}</>
                : <>{back}</>
            }
        </A4TwoSideContainerContext.Consumer>
    )
};


const A4TwoSideMasterStyledContainer = styled.div<{ side: 'front' | 'back'; }>`
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

const SideMasterContainer = styled.div<{ rotate: number; printable: boolean }>`
    position: absolute;
    left: 0;
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

const TwoSideStyledContainer = styled.div<{ side: 'front' | 'back'; }>`
    height: 100%;
    width: 100%;
    position: absolute;

    display: flex;
    flex-direction: ${props => props.side === 'front' ? 'row' : 'row-reverse'};
    justify-content: start;
    align-content: baseline;
`;
