export const Random = (min: number, max: number): number => Math.random() * (max - min) + min;

export const DecimalFix = (num: number) => (Math.round(num * 100) / 100).toFixed(2);
export const RoundOff = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;
