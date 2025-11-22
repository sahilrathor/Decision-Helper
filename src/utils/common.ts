import {v4 as uuidv4} from "uuid";
// import {Md5} from "ts-md5";

export const JsonDeepCopy = (d: unknown) => {
    return JSON.parse(JSON.stringify(d));
};

export const UniqueID = () => uuidv4();

// export const HashMd5 = (txt: string): string => Md5.hashStr(txt);
