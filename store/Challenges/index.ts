import allChallenges from '~/assets/challenges/data';
import { State } from './types';

export const state = (): State => ({
	level: 10,
	xp: {
		current: 30,
		start: 0,
		end: 64,
	},
	completedChallenges: 5,
	currentChallengeIndex: null,
	isLevelUpModalOpen: false,
	allChallenges,
});
