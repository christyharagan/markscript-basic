export enum TRIGGER_COMMIT {
  PRE, POST
}

export enum TRIGGER_STATE {
  CREATE, MODIFY, DELETE
}

export enum FrequencyType {
  MINUTES, HOURS, DAYS
}

export enum ScalarType {
  int,
  unsignedInt,
  long,
  unsignedLong,
  float,
  double,
  decimal,
  dateTime,
  time,
  date,
  gYearMonth,
  gYear,
  gMonth,
  gDay,
  yearMonthDuration,
  dayTimeDuration,
  string,
  anyURI
}

export interface RangeIndexedOptions {
  collation?: string
  scalarType?: ScalarType
  path?: string
  name: string
}

export interface GeoIndexedOptions {
  name: string
  path?: string
  pointFormat?: string
  coordinateSystem?: string
}

export interface RuleSetOptions {
  path: string
}

export function mlDeploy() {
  return function(target: any): void {
  }
}

export function geoIndexed(definition?: GeoIndexedOptions) {
  return function(target: Object, propertyKey: string): void {
  }
}

export function rangeIndexed(definition?: RangeIndexedOptions) {
  return function(target: Object, propertyKey: string): void {
  }
}

export function mlRuleSet(definition: RuleSetOptions) {
  return function(target: Object, propertyKey: string, method: TypedPropertyDescriptor<() => string>): void {
  }
}

export interface TaskOptions {
  type: FrequencyType
  frequency: number
  user?: string
  name?: string
}

export function mlTask(definition?: TaskOptions) {
  return function(target: Object, propertyKey: string): void {
  }
}

export interface AlertOptions {
  name?: string
  scope: string
  states?: TRIGGER_STATE[]
  depth?: number
  commit?: TRIGGER_COMMIT
}

export function mlAlert(definition?: AlertOptions) {
  return function(target: Object, propertyKey: string): void {
  }
}

export function mlExtension() {
  return function(target: any) {
    return target
  }
}
