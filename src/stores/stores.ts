import createGenericStore from "./createGenricStore";
import type { OptionInterface } from "../interfaces/optionInterface";

const tempOptions: OptionInterface[] = [
    {
        id: "1",
        label: "Option 1",
        weight: 1
    },
    {
        id: "2",
        label: "Option 2",
        weight: 1
    },
    {
        id: "3",
        label: "Option 3",
        weight: 1
    }
]

export const useOptionsStore = createGenericStore<OptionInterface[]>(
    tempOptions, false, "options-store"
);