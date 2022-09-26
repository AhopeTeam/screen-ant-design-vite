type IRootState = {
	fs: number;
};
const state = {fs: 100};

const mutations = {
	SET_FS(state: IRootState, fs: number) {
		state.fs = fs;
	},
};

const actions = {
	setFs({commit}: any, fs: number) {
		commit('SET_FS', fs);
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
