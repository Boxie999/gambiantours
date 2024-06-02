import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
    //Elements taken from different components
    const isModalOpen = ref(false);
    const name = ref("");
    const activityName = ref("");
    const about = ref("");
    const description = ref("");
    const includes = ref("");
    const duration = ref("");
    const important = ref("");
    const price = ref("");


    return {
        isModalOpen,
        name,
        activityName,
        about,
        description,
        includes,
        duration,
        important,
        price
    }
});

