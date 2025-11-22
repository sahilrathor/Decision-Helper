import axios from "axios";
import SessionUtils from "../utils/session";
interface ApiRequestOptions<PayloadType = any> {
    url: string;
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    payload?: PayloadType;
    headers?: Record<string, string>;
    params?: Record<string, any>;
}

const bodyMethods = new Set(["POST", "PUT", "PATCH"]);
const paramMethods = new Set(["GET", "DELETE"]);

const getHeaders = () => {
    const token = SessionUtils.get("sessionToken");

    if (token) {
        return {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
    }

    return {
        "Content-Type": "application/json",
    };
};

/*
TO CALL API: 
await apiService<PayloadType, ResponseType>(props)

PayloadType = type of payload data required by api (unknown if not specified)
ResponseType = type of expected response data from api (unknown if not specified or leave empty)

Example:
await apiService<any, LoginBody>({
    url: envConfig.API_URL + ENDPOINTS.LOGIN,
    method: 'POST',
    payload: { username: userName, password, platform: "web" }
})
*/

export const apiService = async <PayloadType = any, ResponseType = any>({
    url,
    method,
    payload,
    headers,
    params = {},
}: ApiRequestOptions<PayloadType>): Promise<ResponseType> => {
    try {
        const response = await axios({
            url,
            method,
            data: bodyMethods.has(method) ? payload : undefined,
            params: paramMethods.has(method) ? params : undefined,
            headers: {
                ...getHeaders(),
                ...headers,
            },
        });

        return response.data;
    } catch (error: any) {
        throw {
            status: error?.response?.status || 500,
            message: error?.response?.data?.message || "Internal Server Error",
            data: error?.response?.data,
        };
    }
};
