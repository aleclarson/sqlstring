export interface SqlStringOptions {
  stringifyObjects?: boolean;
  timeZone?: string;
  toJSON?: boolean;
}

declare const SqlString: {
  escapeId(val: any, forbidQualified?: boolean): string;

  escape(
    val: any,
    stringifyObjects?: boolean | SqlStringOptions,
    timeZone?: string | SqlStringOptions
  ): string;

  arrayToList(array: any[], timeZone?: string | SqlStringOptions): string;

  format(
    sql: string,
    values?: any,
    stringifyObjects?: boolean | SqlStringOptions,
    timeZone?: string | SqlStringOptions
  ): string;

  dateToString(date: any, timeZone?: string): string;

  bufferToString(buffer: any): string;

  objectToValues(object: object, timeZone?: string | SqlStringOptions): string;

  raw(sql: string): { toSqlString(): string };
};

export default SqlString;

export const escapeId: typeof SqlString.escapeId;
export const escape: typeof SqlString.escape;
export const arrayToList: typeof SqlString.arrayToList;
export const format: typeof SqlString.format;
export const dateToString: typeof SqlString.dateToString;
export const bufferToString: typeof SqlString.bufferToString;
export const objectToValues: typeof SqlString.objectToValues;
export const raw: typeof SqlString.raw;
