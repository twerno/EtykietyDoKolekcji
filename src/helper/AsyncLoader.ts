export class AsyncLoader {
    private state: undefined | 'pending' | 'initialized' = undefined;
    private onLoadCallbacks: Array<() => void> = [];

    public constructor(private loader: () => Promise<void>) {

    }

    public async load(): Promise<void> {
        if (this.state === 'initialized') {
            return;
        }

        if (this.state === 'pending') {
            return new Promise(resolve => this.onLoadCallbacks.push(resolve));
        }
        this.state = 'pending';
        await this.loader();
        this.state = 'initialized';
        this.onLoadCallbacks.forEach(callback => callback());
        this.onLoadCallbacks.length = 0;
    }

}