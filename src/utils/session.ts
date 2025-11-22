import Cookies from "js-cookie";

export default class SessionUtils {

    static save(key: string, value: string) {
        Cookies.set(key, value);
    }

    static get(key: string) {
        return Cookies.get(key);
    }

    static flush(key: string) {
        Cookies.remove(key);
    }

}
