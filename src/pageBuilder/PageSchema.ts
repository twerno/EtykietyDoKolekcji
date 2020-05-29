export interface IPageSchema {
    interfaceId: 'IPageSchema';

    name: string;
    content: IListaEtykietSchema;
}

export interface Typ2ContainerSchema {
    interfaceId: 'Typ2Container';

    // content: ListaEtykietSchema;
}

export interface Typ3ContainerSchema {
    interfaceId: 'Typ3Container';

    // content: ListaEtykietSchema;
}

export interface MapaPlusOpisy {
    interfaceId: 'MapaPlusOpisy';

    // OPCJE MAPY
    content: EtykietaZInfoboxem[];
}

// export interface ListaEtykietSchema {
//     interfaceId: 'ListaEtykiet';

//     // typ listy
//     content: EtykietaZInfoboxem[];
// }

export interface EtykietaMalaTyp20 extends Etykieta {
    interfaceId: 'EtykietaMalaTyp20';
}

export interface EtykietaMalaTyp35 extends Etykieta {
    interfaceId: 'EtykietaMalaTyp35';
}

export interface Etykieta {
    countryCode: string;
    customImgUrl?: string;
    customLabel?: string;
    // fontSize: number;
}

export interface EtykietaZInfoboxem {
    interfaceId: 'EtykietaZInfoboxem';
}

export interface IInfoboxConfig {
    interfaceId: 'IInfoboxConfig';
    textAlign?: 'center' | 'left';
    interspace?: 'dence' | 'loose';
    showSeparator?: boolean;

    items: IInfoboxItemConfig[];
}

export interface IInfoboxItemConfig {
    interfaceId: 'IInfoboxItemConfig';
    content: IInfoboxItemTextConfig | IInfoboxItemTextWithLabelConfig;
}

export interface IInfoboxItemTextConfig {
    interfaceId: 'IInfoboxItemTextConfig';
    text: string;
}

export interface IInfoboxItemTextWithLabelConfig {
    interfaceId: 'IInfoboxItemTextWithLabelConfig';
    label: string;
    text: string;
}

export interface IListaEtykietSchema {
    interfaceId: 'IListaEtykiet';

    content: Array<IEtykietaTyp20Schema | IEtykietaTyp35Schema>;
}

export interface IEtykietaTyp20Schema {
    interfaceId: 'IEtykietaTyp20';
    countryCode: string;
    customImgUrl?: string;
    customLabel?: string;
    // fontSize: number;
}

export interface IEtykietaTyp35Schema {
    interfaceId: 'IEtykietaTyp35';
    countryCode: string;
    customImgUrl?: string;
    customLabel?: string;
    // fontSize: number;
}
