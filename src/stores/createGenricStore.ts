import { create } from "zustand";
import type { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

export interface GenericStore<T> {
    data: T;
    setData: (value: T) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    reset: () => void;
}

/**
 * @template T - Type of the state data.
 * @param initialValue - Default initial value
 * @param persistStore - store in local storage?
 * @param persistKey - Storage key used when persistStore is true
 *
 * @returns
 */
function createGenericStore<T>(
    initialValue: T,
    persistStore: boolean = false,
    persistKey: string = "generic-store"
) {
    const baseConfig: StateCreator<GenericStore<T>> = (set) => ({
        data: structuredClone(initialValue),
        isLoading: false,

        setData: (value: T) => set({ data: value }),

        setIsLoading: (value: boolean) => set({ isLoading: value }),

        reset: () =>
            set({
                data: structuredClone(initialValue),
                isLoading: false,
            }),
    });

    return persistStore
        ? create<GenericStore<T>>()(
              persist(baseConfig, {
                  name: persistKey,
                  partialize: (state) => ({ data: state.data }), // store only data in local storage (not loading value)
              })
          )
        : create<GenericStore<T>>(baseConfig);
}

export default createGenericStore;
