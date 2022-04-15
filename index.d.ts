declare const SqlString: {
  escapeId(val: any, forbidQualified?: boolean): string;
  escape(val: any, stringifyObjects?: boolean, timeZone?: string): string;
  arrayToList(array: any[], timeZone?: string): string;
  format(
    sql: string,
    values?: any,
    stringifyObjects?: boolean,
    timeZone?: string
  ): string;
  dateToString(date: any, timeZone?: string): string;
  bufferToString(buffer: any): string;
  objectToValues(object: object, timeZone?: string): string;
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
