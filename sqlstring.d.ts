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

exports = SqlString;
