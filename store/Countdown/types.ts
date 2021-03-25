import { MutationTree } from 'vuex';
export interface State {
	time: number; // store the time in the countdown
	isActive: boolean; // the countdown started or not
	hasCompleted: boolean; // the countdown completed or not
}

// access the state and returns the state modified
export interface Getters {
	minutes: (state: State) => number;
	seconds: (state: State) => number;
}

// responsible with the modifications with the state
export enum Mutations {
	SET_TIME = 'SET_TIME',
	RESET_TIME = 'RESET_TIME',
	SET_IS_ACTIVE = 'SET_IS_ACTIVE',
	SET_HAS_COMPLETED = 'SET_HAS_COMPLETED'
}

export type RootState = ReturnType<() => State>
export interface MutationsInterface extends MutationTree<RootState> {
	[Mutations.SET_TIME](s: State, p: number): void; // SET_TIME(s,p):void
	[Mutations.RESET_TIME](s: State): void;
	[Mutations.SET_IS_ACTIVE](s: State, p: boolean): void;
	[Mutations.SET_HAS_COMPLETED](s: State, p: boolean): void;
}
