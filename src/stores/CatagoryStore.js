import { defineStore } from 'pinia'

export const useCatagoryStore = defineStore('catagoryStore', {
    state: () => ({
        catagories: [
            { id: 1, name: 'General Knowledge', url: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple' },
            { id: 2, name: 'Books', url: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple' },
            { id: 3, name: 'Film', url: 'https://opentdb.com/api.php?amount=10&category=11&type=multiple' },
        ],
        selectedCatagory: null,
        api: ''
    }),

    actions: {
        selectCatagory(catagory) {
           this.selectedCatagory =  catagory;
        }
    }
})