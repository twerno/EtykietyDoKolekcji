export interface IListaEtykietSchema {
    interfaceId: 'IListaEtykietSchema';

    content: Array<IEtykietaBasicSchema>;
}

export interface IEtykietaBasicSchema {
    interfaceId: 'IEtykietaBasicSchema';
    typ: 'typ20' | 'typ35';
    countryCode: string;
    customImgUrl?: string;
    customLabel?: string;
    fontSize: number;
}
