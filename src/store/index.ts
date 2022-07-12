import { moduleModal as modal, ModuleModal } from "./modules/modal"
import { createStore } from "vuex"

export interface RootState {
  modal: ModuleModal
}

export default createStore({
  modules: {
    modal
  },
  strict: false
})
