import * as React from 'react';

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
    }, [wrapperRef.current]);

    return (
        <div ref={wrapperRef} style={{ minWidth: '100px', minHeight: '100px', position: 'relative' }}>
            {inView ? props.children : null}
        </div>
    );
};

document.addEventListener('load', () => window.scroll());