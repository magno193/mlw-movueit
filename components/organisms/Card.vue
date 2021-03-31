<template>
	<div class="bg-white rounded-md flex flex-1 w-full mt-8 lg:mt-0 shadow-sm">
		<Challenge v-if="currentChallenge" v-bind="currentChallenge" />
		<StartCycle v-else />
		<LevelUpModal />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import Challenge from '../molecules/Challenge.vue';
import StartCycle from '../atoms/StartCycle.vue';
import LevelUpModal from '../atoms/LevelUpModal.vue';
export default Vue.extend({
	components: {
		Challenge,
		StartCycle,
		LevelUpModal,
	},
	computed: mapGetters('Challenges', ['currentChallenge']),
});
</script>
