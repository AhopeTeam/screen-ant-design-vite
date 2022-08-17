import { createStore } from 'vuex'

const modulesFiles = import.meta.globEager('./modules/*.ts')
const modules: any = []
for (let key in modulesFiles) {
  let myKey: string = key.replace(/^\.\/(.*)\.\w+$/, '$1').replace('modules/', '')
  modules[myKey] = modulesFiles[key].default
}

const store = createStore({
  modules
})
export default store