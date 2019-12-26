import {RequestOptions} from "./options";
import https from "https"

export const makeRequest = <T>(options: RequestOptions<any>): Promise<T> => {
    https.
}