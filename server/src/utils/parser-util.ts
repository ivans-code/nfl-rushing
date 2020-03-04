export class ParserUtil {

    public static isString(input: any): boolean {
        return typeof input === 'string' || input instanceof String;
    }

}
