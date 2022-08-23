
import {createStore} from 'vuex';

const modulesFiles = import.meta.globEager('./modules/*.ts');
const modules: any = [];
for (const key in modulesFiles) {
	if (Object.prototype.hasOwnProperty.call(modulesFiles, key)) {
		const myKey: string = key.replace(/^\.\/(.*)\.\w+$/, '$1').replace('modules/', '');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		modules[myKey] = modulesFiles[key].default;
	}
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const store = createStore({modules});
export default store;
