import * as React from 'react';

export interface IAsyncTextRendererProps {
    provider: string | Promise<string>;
}

export const AsyncTextRenderer = (props: IAsyncTextRendererProps) => {
    const [text, setText] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof props.provider === 'string') {
            setText(props.provider);
        }
        else {
            props.provider
                .then(setText);
        }
    }, [props.provider]);

    return <>{text}</>;
}