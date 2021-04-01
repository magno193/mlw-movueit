/* eslint-disable space-before-function-paren */
import { Mutations } from './Challenges/types';

export const actions = {
	nuxtServerInit(store: any, context: any) {
		const cookie = context.app.$cookiz.get('movueit');
		if (cookie) {
			store.commit(`Challenges/${Mutations.SAVE_COOKIE_DATA}`, cookie);
		}
	},
};
