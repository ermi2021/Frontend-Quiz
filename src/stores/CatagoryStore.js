import { defineStore } from 'pinia'

export const useCatagoryStore = defineStore('catagoryStore', {
  state: () => ({
    catagories: [
      {
        id: 1,
        name: 'General Knowledge',
        url: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple',
        img: '../assets/images/general_knowledge.png',
      },
      {
        id: 2,
        name: 'Books',
        url: 'https://opentdb.com/api.php?amount=10&category=10&type=multiple',
        img: '../assets/images/books.png',
      },
      {
        id: 3,
        name: 'Film',
        url: 'https://opentdb.com/api.php?amount=10&category=11&type=multiple',
        img: '../assets/images/films.png',
      },
      {
        id: 4,
        name: 'Computer',
        url: 'https://opentdb.com/api.php?amount=10&category=18&type=multiple',
        img: '../assets/images/computer.png',
      },
      {
        id: 5,
        name: 'Geography',
        url: 'https://opentdb.com/api.php?amount=10&category=22&type=multiple',
        img: '../assets/images/geography.png',
      },
      {
        id: 6,
        name: 'Mythology',
        url: 'https://opentdb.com/api.php?amount=10&category=20&type=multiple',
        img: '../assets/images/myth.png',
      },
      {
        id: 7,
        name: 'History',
        url: 'https://opentdb.com/api.php?amount=10&category=23&type=multiple',
        img: '../assets/images/history.png',
      },
      {
        id: 8,
        name: 'Politics',
        url: 'https://opentdb.com/api.php?amount=10&category=24&type=multiple',
        img: '../assets/images/politics.png',
      },
      {
        id: 9,
        name: 'Art',
        url: 'https://opentdb.com/api.php?amount=10&category=25&type=multiple',
        img: '../assets/images/art.png',
      },
      {
        id: 10,
        name: 'Celebrities',
        url: 'https://opentdb.com/api.php?amount=10&category=26&type=multiple',
        img: '../assets/images/cele',
      },
      {
        id: 11,
        name: 'Animals',
        url: 'https://opentdb.com/api.php?amount=10&category=27&type=multiple',
        img: '../assets/images/celebrities.png',
      },
    ],
    selectedCatagory: null,
    api: '',
  }),

  actions: {
    selectCatagory(catagory) {
      this.selectedCatagory = catagory
    },
  },
})
