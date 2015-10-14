export declare enum TRIGGER_COMMIT {
    PRE = 0,
    POST = 1,
}
export declare enum TRIGGER_STATE {
    CREATE = 0,
    MODIFY = 1,
    DELETE = 2,
}
export declare enum FrequencyType {
    MINUTES = 0,
    HOURS = 1,
    DAYS = 2,
}
export declare enum ScalarType {
    int = 0,
    unsignedInt = 1,
    long = 2,
    unsignedLong = 3,
    float = 4,
    double = 5,
    decimal = 6,
    dateTime = 7,
    time = 8,
    date = 9,
    gYearMonth = 10,
    gYear = 11,
    gMonth = 12,
    gDay = 13,
    yearMonthDuration = 14,
    dayTimeDuration = 15,
    string = 16,
    anyURI = 17,
}
export interface RangeIndexedOptions {
    collation?: string;
    scalarType?: ScalarType;
    path?: string;
    name: string;
}
export interface GeoIndexedOptions {
    name: string;
    path?: string;
    pointFormat?: string;
    coordinateSystem?: string;
}
export interface RuleSetOptions {
    path: string;
}
export declare function mlDeploy(): (target: any) => void;
export declare function geoIndexed(definition?: GeoIndexedOptions): (target: Object, propertyKey: string) => void;
export declare function rangeIndexed(definition?: RangeIndexedOptions): (target: Object, propertyKey: string) => void;
export declare function mlRuleSet(definition: RuleSetOptions): (target: Object, propertyKey: string, method: TypedPropertyDescriptor<() => string>) => void;
export interface TaskOptions {
    type: FrequencyType;
    frequency: number;
    user?: string;
    name?: string;
}
export declare function mlTask(definition?: TaskOptions): (target: Object, propertyKey: string) => void;
export interface AlertOptions {
    name?: string;
    scope: string;
    states?: TRIGGER_STATE[];
    depth?: number;
    commit?: TRIGGER_COMMIT;
}
export declare function mlAlert(definition?: AlertOptions): (target: Object, propertyKey: string) => void;
export declare function mlExtension(): (target: any) => any;