import { Module } from "vuex"
import { RootState } from "../index"

export interface ModuleModal {

}

export const moduleModal: Module<ModuleModal, RootState> = {
    namespaced: true,
    state: () => ({

    }),
    getters: {
    },
    mutations: {
    },
    actions: {
    }
}
