import * as React from 'react';
import { FlexContainer } from '../containers/FlexContainer';

export const LazyComponent: React.FC<{}> = (props) => {

    const [inView, setInView] = React.useState<boolean>(false);
    const callback = React.useRef<IntersectionObserverCallback>((entries, observer) => {
        entries
            .filter(e => e.isIntersecting)
            .forEach(e => {
                setInView(true);
                observer.disconnect();
            });
    });

    const observer = React.useRef(new IntersectionObserver(callback.current));
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    React.useLayoutEffect(() => {
        if (wrapperRef.current) {
            observer.current.observe(wrapperRef.current);
        }
    }, []);

    return (
        <FlexContainer ref={wrapperRef} fullSize display="block">
            {inView ? props.children : null}
        </FlexContainer>
    );
};

document.addEventListener('load', () => window.scroll());
