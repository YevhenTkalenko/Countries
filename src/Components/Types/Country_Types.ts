export interface Country_Interface_Full {
    borders: string[]
    name: {
        common: string;
        official: string;
        nativeName: {
            [languageCode: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [currencyCode: string]: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    languages: {
        [languageCode: string]: string;
    };
    translations: {
        [languageCode: string]: {
            official: string;
            common: string;
        };
    };
    latlng: [number, number];
    landlocked: boolean;
    area: number;
    demonyms: {
        eng: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
    };
    coatOfArms: Record<string, unknown>;
    startOfWeek: string;
    capitalInfo: {
        latlng: [number, number];
    };
}


export interface Country_Interface_Short {
    name: {
        common: string;
        official: string;
        nativeName: {
            [languageCode: string]: {
                official: string;
                common: string;
            };
        };
    };
    capital: string[];
    flags: {
        png: string;
        svg: string;
    };
    population: number;
    region: string;
}

