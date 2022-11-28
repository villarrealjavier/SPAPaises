// To parse this data:
//
//   import { Convert } from "./file";
//
//   const paisSearch = Convert.toPaisSearch(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PaisSearch {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion:    string;
    languages:    { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    MRU?: Afn;
    DZD?: Afn;
    ARS?: Afn;
    MZN?: Afn;
    MVR?: Afn;
    EUR?: Afn;
    HNL?: Afn;
    ZAR?: Afn;
    USD?: Afn;
    AZN?: Afn;
    MKD?: Afn;
    GMD?: Afn;
    LRD?: Afn;
    PKR?: Afn;
    NZD?: Afn;
    ZMW?: Afn;
    CVE?: Afn;
    AUD?: Afn;
    KID?: Afn;
    TZS?: Afn;
    SCR?: Afn;
    CNY?: Afn;
    GTQ?: Afn;
    STN?: Afn;
    SLL?: Afn;
    XAF?: Afn;
    UZS?: Afn;
    VUV?: Afn;
    SGD?: Afn;
    THB?: Afn;
    IDR?: Afn;
    SRD?: Afn;
    MAD?: Afn;
    CRC?: Afn;
    XOF?: Afn;
    DOP?: Afn;
    GHS?: Afn;
    TRY?: Afn;
    MUR?: Afn;
    IRR?: Afn;
    KZT?: Afn;
    EGP?: Afn;
    ALL?: Afn;
    PGK?: Afn;
    KES?: Afn;
    BIF?: Afn;
    BGN?: Afn;
    ZWL?: Afn;
    INR?: Afn;
    UYU?: Afn;
    AOA?: Afn;
    NGN?: Afn;
    PLN?: Afn;
    LBP?: Afn;
    WST?: Afn;
    PHP?: Afn;
    MOP?: Afn;
    SYP?: Afn;
    AFN?: Afn;
    XCD?: Afn;
    ANG?: Afn;
    RSD?: Afn;
    AMD?: Afn;
    BDT?: Afn;
    LAK?: Afn;
    CLP?: Afn;
    XPF?: Afn;
    PAB?: Afn;
    KGS?: Afn;
    TTD?: Afn;
    NPR?: Afn;
    ILS?: Afn;
    JOD?: Afn;
    MMK?: Afn;
    MGA?: Afn;
    HRK?: Afn;
    GNF?: Afn;
    HTG?: Afn;
    CHF?: Afn;
    MWK?: Afn;
    CUC?: Afn;
    CUP?: Afn;
    TWD?: Afn;
    CDF?: Afn;
    KRW?: Afn;
    PEN?: Afn;
    VND?: Afn;
    IQD?: Afn;
    MDL?: Afn;
    VES?: Afn;
    GYD?: Afn;
    BRL?: Afn;
    PYG?: Afn;
    BND?: Afn;
    BOB?: Afn;
    LKR?: Afn;
    DJF?: Afn;
    SDG?: Sdg;
    JPY?: Afn;
    SOS?: Afn;
    RWF?: Afn;
    ISK?: Afn;
    BYN?: Afn;
    HKD?: Afn;
    NIO?: Afn;
    FJD?: Afn;
    UGX?: Afn;
    COP?: Afn;
    ETB?: Afn;
    TJS?: Afn;
    SSP?: Afn;
    KPW?: Afn;
    CZK?: Afn;
    NAD?: Afn;
    BWP?: Afn;
    TND?: Afn;
    YER?: Afn;
}

export interface Afn {
    name:   string;
    symbol: string;
}

export interface Sdg {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPaisSearch(json: string): PaisSearch[] {
        return cast(JSON.parse(json), a(r("PaisSearch")));
    }

    public static paisSearchToJson(value: PaisSearch[]): string {
        return JSON.stringify(uncast(value, a(r("PaisSearch"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "PaisSearch": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "tld", js: "tld", typ: u(undefined, a("")) },
        { json: "cca2", js: "cca2", typ: "" },
        { json: "ccn3", js: "ccn3", typ: u(undefined, "") },
        { json: "cca3", js: "cca3", typ: "" },
        { json: "cioc", js: "cioc", typ: u(undefined, "") },
        { json: "independent", js: "independent", typ: u(undefined, true) },
        { json: "status", js: "status", typ: r("Status") },
        { json: "unMember", js: "unMember", typ: true },
        { json: "currencies", js: "currencies", typ: r("Currencies") },
        { json: "idd", js: "idd", typ: r("Idd") },
        { json: "capital", js: "capital", typ: u(undefined, a("")) },
        { json: "altSpellings", js: "altSpellings", typ: a("") },
        { json: "region", js: "region", typ: r("Region") },
        { json: "subregion", js: "subregion", typ: "" },
        { json: "languages", js: "languages", typ: m("") },
        { json: "translations", js: "translations", typ: m(r("Translation")) },
        { json: "latlng", js: "latlng", typ: a(3.14) },
        { json: "landlocked", js: "landlocked", typ: true },
        { json: "borders", js: "borders", typ: u(undefined, a("")) },
        { json: "area", js: "area", typ: 3.14 },
        { json: "demonyms", js: "demonyms", typ: r("Demonyms") },
        { json: "flag", js: "flag", typ: "" },
        { json: "maps", js: "maps", typ: r("Maps") },
        { json: "population", js: "population", typ: 0 },
        { json: "gini", js: "gini", typ: u(undefined, m(3.14)) },
        { json: "fifa", js: "fifa", typ: u(undefined, "") },
        { json: "car", js: "car", typ: r("Car") },
        { json: "timezones", js: "timezones", typ: a("") },
        { json: "continents", js: "continents", typ: a(r("Region")) },
        { json: "flags", js: "flags", typ: r("CoatOfArms") },
        { json: "coatOfArms", js: "coatOfArms", typ: r("CoatOfArms") },
        { json: "startOfWeek", js: "startOfWeek", typ: r("StartOfWeek") },
        { json: "capitalInfo", js: "capitalInfo", typ: r("CapitalInfo") },
        { json: "postalCode", js: "postalCode", typ: u(undefined, r("PostalCode")) },
    ], false),
    "CapitalInfo": o([
        { json: "latlng", js: "latlng", typ: u(undefined, a(3.14)) },
    ], false),
    "Car": o([
        { json: "signs", js: "signs", typ: a("") },
        { json: "side", js: "side", typ: r("Side") },
    ], false),
    "CoatOfArms": o([
        { json: "png", js: "png", typ: u(undefined, "") },
        { json: "svg", js: "svg", typ: u(undefined, "") },
    ], false),
    "Currencies": o([
        { json: "MRU", js: "MRU", typ: u(undefined, r("Afn")) },
        { json: "DZD", js: "DZD", typ: u(undefined, r("Afn")) },
        { json: "ARS", js: "ARS", typ: u(undefined, r("Afn")) },
        { json: "MZN", js: "MZN", typ: u(undefined, r("Afn")) },
        { json: "MVR", js: "MVR", typ: u(undefined, r("Afn")) },
        { json: "EUR", js: "EUR", typ: u(undefined, r("Afn")) },
        { json: "HNL", js: "HNL", typ: u(undefined, r("Afn")) },
        { json: "ZAR", js: "ZAR", typ: u(undefined, r("Afn")) },
        { json: "USD", js: "USD", typ: u(undefined, r("Afn")) },
        { json: "AZN", js: "AZN", typ: u(undefined, r("Afn")) },
        { json: "MKD", js: "MKD", typ: u(undefined, r("Afn")) },
        { json: "GMD", js: "GMD", typ: u(undefined, r("Afn")) },
        { json: "LRD", js: "LRD", typ: u(undefined, r("Afn")) },
        { json: "PKR", js: "PKR", typ: u(undefined, r("Afn")) },
        { json: "NZD", js: "NZD", typ: u(undefined, r("Afn")) },
        { json: "ZMW", js: "ZMW", typ: u(undefined, r("Afn")) },
        { json: "CVE", js: "CVE", typ: u(undefined, r("Afn")) },
        { json: "AUD", js: "AUD", typ: u(undefined, r("Afn")) },
        { json: "KID", js: "KID", typ: u(undefined, r("Afn")) },
        { json: "TZS", js: "TZS", typ: u(undefined, r("Afn")) },
        { json: "SCR", js: "SCR", typ: u(undefined, r("Afn")) },
        { json: "CNY", js: "CNY", typ: u(undefined, r("Afn")) },
        { json: "GTQ", js: "GTQ", typ: u(undefined, r("Afn")) },
        { json: "STN", js: "STN", typ: u(undefined, r("Afn")) },
        { json: "SLL", js: "SLL", typ: u(undefined, r("Afn")) },
        { json: "XAF", js: "XAF", typ: u(undefined, r("Afn")) },
        { json: "UZS", js: "UZS", typ: u(undefined, r("Afn")) },
        { json: "VUV", js: "VUV", typ: u(undefined, r("Afn")) },
        { json: "SGD", js: "SGD", typ: u(undefined, r("Afn")) },
        { json: "THB", js: "THB", typ: u(undefined, r("Afn")) },
        { json: "IDR", js: "IDR", typ: u(undefined, r("Afn")) },
        { json: "SRD", js: "SRD", typ: u(undefined, r("Afn")) },
        { json: "MAD", js: "MAD", typ: u(undefined, r("Afn")) },
        { json: "CRC", js: "CRC", typ: u(undefined, r("Afn")) },
        { json: "XOF", js: "XOF", typ: u(undefined, r("Afn")) },
        { json: "DOP", js: "DOP", typ: u(undefined, r("Afn")) },
        { json: "GHS", js: "GHS", typ: u(undefined, r("Afn")) },
        { json: "TRY", js: "TRY", typ: u(undefined, r("Afn")) },
        { json: "MUR", js: "MUR", typ: u(undefined, r("Afn")) },
        { json: "IRR", js: "IRR", typ: u(undefined, r("Afn")) },
        { json: "KZT", js: "KZT", typ: u(undefined, r("Afn")) },
        { json: "EGP", js: "EGP", typ: u(undefined, r("Afn")) },
        { json: "ALL", js: "ALL", typ: u(undefined, r("Afn")) },
        { json: "PGK", js: "PGK", typ: u(undefined, r("Afn")) },
        { json: "KES", js: "KES", typ: u(undefined, r("Afn")) },
        { json: "BIF", js: "BIF", typ: u(undefined, r("Afn")) },
        { json: "BGN", js: "BGN", typ: u(undefined, r("Afn")) },
        { json: "ZWL", js: "ZWL", typ: u(undefined, r("Afn")) },
        { json: "INR", js: "INR", typ: u(undefined, r("Afn")) },
        { json: "UYU", js: "UYU", typ: u(undefined, r("Afn")) },
        { json: "AOA", js: "AOA", typ: u(undefined, r("Afn")) },
        { json: "NGN", js: "NGN", typ: u(undefined, r("Afn")) },
        { json: "PLN", js: "PLN", typ: u(undefined, r("Afn")) },
        { json: "LBP", js: "LBP", typ: u(undefined, r("Afn")) },
        { json: "WST", js: "WST", typ: u(undefined, r("Afn")) },
        { json: "PHP", js: "PHP", typ: u(undefined, r("Afn")) },
        { json: "MOP", js: "MOP", typ: u(undefined, r("Afn")) },
        { json: "SYP", js: "SYP", typ: u(undefined, r("Afn")) },
        { json: "AFN", js: "AFN", typ: u(undefined, r("Afn")) },
        { json: "XCD", js: "XCD", typ: u(undefined, r("Afn")) },
        { json: "ANG", js: "ANG", typ: u(undefined, r("Afn")) },
        { json: "RSD", js: "RSD", typ: u(undefined, r("Afn")) },
        { json: "AMD", js: "AMD", typ: u(undefined, r("Afn")) },
        { json: "BDT", js: "BDT", typ: u(undefined, r("Afn")) },
        { json: "LAK", js: "LAK", typ: u(undefined, r("Afn")) },
        { json: "CLP", js: "CLP", typ: u(undefined, r("Afn")) },
        { json: "XPF", js: "XPF", typ: u(undefined, r("Afn")) },
        { json: "PAB", js: "PAB", typ: u(undefined, r("Afn")) },
        { json: "KGS", js: "KGS", typ: u(undefined, r("Afn")) },
        { json: "TTD", js: "TTD", typ: u(undefined, r("Afn")) },
        { json: "NPR", js: "NPR", typ: u(undefined, r("Afn")) },
        { json: "ILS", js: "ILS", typ: u(undefined, r("Afn")) },
        { json: "JOD", js: "JOD", typ: u(undefined, r("Afn")) },
        { json: "MMK", js: "MMK", typ: u(undefined, r("Afn")) },
        { json: "MGA", js: "MGA", typ: u(undefined, r("Afn")) },
        { json: "HRK", js: "HRK", typ: u(undefined, r("Afn")) },
        { json: "GNF", js: "GNF", typ: u(undefined, r("Afn")) },
        { json: "HTG", js: "HTG", typ: u(undefined, r("Afn")) },
        { json: "CHF", js: "CHF", typ: u(undefined, r("Afn")) },
        { json: "MWK", js: "MWK", typ: u(undefined, r("Afn")) },
        { json: "CUC", js: "CUC", typ: u(undefined, r("Afn")) },
        { json: "CUP", js: "CUP", typ: u(undefined, r("Afn")) },
        { json: "TWD", js: "TWD", typ: u(undefined, r("Afn")) },
        { json: "CDF", js: "CDF", typ: u(undefined, r("Afn")) },
        { json: "KRW", js: "KRW", typ: u(undefined, r("Afn")) },
        { json: "PEN", js: "PEN", typ: u(undefined, r("Afn")) },
        { json: "VND", js: "VND", typ: u(undefined, r("Afn")) },
        { json: "IQD", js: "IQD", typ: u(undefined, r("Afn")) },
        { json: "MDL", js: "MDL", typ: u(undefined, r("Afn")) },
        { json: "VES", js: "VES", typ: u(undefined, r("Afn")) },
        { json: "GYD", js: "GYD", typ: u(undefined, r("Afn")) },
        { json: "BRL", js: "BRL", typ: u(undefined, r("Afn")) },
        { json: "PYG", js: "PYG", typ: u(undefined, r("Afn")) },
        { json: "BND", js: "BND", typ: u(undefined, r("Afn")) },
        { json: "BOB", js: "BOB", typ: u(undefined, r("Afn")) },
        { json: "LKR", js: "LKR", typ: u(undefined, r("Afn")) },
        { json: "DJF", js: "DJF", typ: u(undefined, r("Afn")) },
        { json: "SDG", js: "SDG", typ: u(undefined, r("Sdg")) },
        { json: "JPY", js: "JPY", typ: u(undefined, r("Afn")) },
        { json: "SOS", js: "SOS", typ: u(undefined, r("Afn")) },
        { json: "RWF", js: "RWF", typ: u(undefined, r("Afn")) },
        { json: "ISK", js: "ISK", typ: u(undefined, r("Afn")) },
        { json: "BYN", js: "BYN", typ: u(undefined, r("Afn")) },
        { json: "HKD", js: "HKD", typ: u(undefined, r("Afn")) },
        { json: "NIO", js: "NIO", typ: u(undefined, r("Afn")) },
        { json: "FJD", js: "FJD", typ: u(undefined, r("Afn")) },
        { json: "UGX", js: "UGX", typ: u(undefined, r("Afn")) },
        { json: "COP", js: "COP", typ: u(undefined, r("Afn")) },
        { json: "ETB", js: "ETB", typ: u(undefined, r("Afn")) },
        { json: "TJS", js: "TJS", typ: u(undefined, r("Afn")) },
        { json: "SSP", js: "SSP", typ: u(undefined, r("Afn")) },
        { json: "KPW", js: "KPW", typ: u(undefined, r("Afn")) },
        { json: "CZK", js: "CZK", typ: u(undefined, r("Afn")) },
        { json: "NAD", js: "NAD", typ: u(undefined, r("Afn")) },
        { json: "BWP", js: "BWP", typ: u(undefined, r("Afn")) },
        { json: "TND", js: "TND", typ: u(undefined, r("Afn")) },
        { json: "YER", js: "YER", typ: u(undefined, r("Afn")) },
    ], false),
    "Afn": o([
        { json: "name", js: "name", typ: "" },
        { json: "symbol", js: "symbol", typ: "" },
    ], false),
    "Sdg": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "Demonyms": o([
        { json: "eng", js: "eng", typ: r("Eng") },
        { json: "fra", js: "fra", typ: u(undefined, r("Eng")) },
    ], false),
    "Eng": o([
        { json: "f", js: "f", typ: "" },
        { json: "m", js: "m", typ: "" },
    ], false),
    "Idd": o([
        { json: "root", js: "root", typ: "" },
        { json: "suffixes", js: "suffixes", typ: a("") },
    ], false),
    "Maps": o([
        { json: "googleMaps", js: "googleMaps", typ: "" },
        { json: "openStreetMaps", js: "openStreetMaps", typ: "" },
    ], false),
    "Name": o([
        { json: "common", js: "common", typ: "" },
        { json: "official", js: "official", typ: "" },
        { json: "nativeName", js: "nativeName", typ: m(r("Translation")) },
    ], false),
    "Translation": o([
        { json: "official", js: "official", typ: "" },
        { json: "common", js: "common", typ: "" },
    ], false),
    "PostalCode": o([
        { json: "format", js: "format", typ: "" },
        { json: "regex", js: "regex", typ: u(undefined, "") },
    ], false),
    "Side": [
        "left",
        "right",
    ],
    "Region": [
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "North America",
        "Oceania",
        "South America",
    ],
    "StartOfWeek": [
        "monday",
        "saturday",
        "sunday",
    ],
    "Status": [
        "officially-assigned",
        "user-assigned",
    ],
};
