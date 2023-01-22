import { defineStore } from 'pinia'

export const useCatagoryStore = defineStore('catagoryStore', {
    state: () => ({
        catagories: [
            { id: 1, name: 'General Knowledge', url: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple', img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 2, name: 'Books', url: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple', img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 3, name: 'Film', url: 'https://opentdb.com/api.php?amount=10&category=11&type=multiple', img: 'https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 4, name: 'Geography', url: 'https://opentdb.com/api.php?amount=10&category=22&type=multiple', img: 'https://images.pexels.com/photos/414916/pexels-photo-414916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 5, name: 'Mythology', url: 'https://opentdb.com/api.php?amount=10&category=20&type=multiple', img: 'https://images.pexels.com/photos/4394274/pexels-photo-4394274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 6, name: 'History', url: 'https://opentdb.com/api.php?amount=10&category=23&type=multiple', img: 'https://images.pexels.com/photos/208674/pexels-photo-208674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 7, name: 'Politics', url: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple', img: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 8, name: 'Art', url: 'https://opentdb.com/api.php?amount=10&category=25&type=multiple', img: 'https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 9, name: 'Celebrities', url: 'https://opentdb.com/api.php?amount=10&category=26&type=multiple', img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            { id: 10, name: 'Animals', url: 'https://opentdb.com/api.php?amount=10&category=27&type=multiple', img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        ],
        selectedCatagory: null,
        api: ''
    }),

    actions: {
        selectCatagory(catagory) {
            this.selectedCatagory = catagory;
        }
    }
})