import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        name: 'Перинатальный центр',
        category: ['construction'],
        description: '<p>Общая площадь: 27 600 м²<br/> Заказчик: ООО РТ "Соцстрой", 2017г.<br/>г. Ульяновск</p>',
        mainImage: require('../assets/img/projects/p_1-1.jpg'),
        images: [
          require('../assets/img/projects/p_1-2.jpg'),
          require('../assets/img/projects/p_1-3.jpg'),
          require('../assets/img/projects/p_1-4.jpg'),
          require('../assets/img/projects/p_1-5.jpg'),
        ]

      },
      {
        id: 2,
        name: 'Апарт-отель',
        category: ['construction', 'interiors', 'planning'],
        description: '<p>Гостиничный комплекс<br/>Общая площадь: 27 000 м²<br/> Заказчик: ООО "Форвард Групп", 2010г.<br/>г. Казань</p>',
        mainImage: require('../assets/img/projects/p_2-1.jpg'),
        images: [
          require('../assets/img/projects/p_2-7.jpg'),
          require('../assets/img/projects/p_2-8.jpg'),
          require('../assets/img/projects/p_2-9.jpg'),
          require('../assets/img/projects/p_2-3.jpg'),
          require('../assets/img/projects/p_2-4.jpg'),
          require('../assets/img/projects/p_2-5.jpg'),
          require('../assets/img/projects/p_2-2.jpg'),
          require('../assets/img/projects/p_2-6.jpg'),
        ]
      },
      {
        id: 3,
        name: 'Отель "Мираж"',
        category: ['construction', 'planning'],
        description: '<p>Гостиница<br/>Общая площадь: 17 000 м²<br/> Заказчик: ООО "Тайм", 2003г.<br/>г. Казань</p>',
        mainImage: require('../assets/img/projects/p_3-1.jpg'),
        images: [
          require('../assets/img/projects/p_3-2.jpg'),
          require('../assets/img/projects/p_3-3.jpg'),
          require('../assets/img/projects/p_3-4.jpg'),
          require('../assets/img/projects/p_3-5.jpg'),
          require('../assets/img/projects/p_3-6.jpg'),
          require('../assets/img/projects/p_3-7.jpg'),
        ]
      },
      {
        id: 4,
        name: '"Бахетле"',
        category: ['construction', 'planning'],
        description: '<p>Торговый комплекс<br/>Общая площадь: 24 000 м²<br/> Заказчик: ООО "Бауер-Казань", 2008г.<br/>г. Казань</p>',
        mainImage: require('../assets/img/projects/p_4-1.jpg'),
        images: [
          require('../assets/img/projects/p_4-2.jpg'),
          require('../assets/img/projects/p_4-3.jpg'),
          require('../assets/img/projects/p_4-4.jpg'),
          require('../assets/img/projects/p_4-5.jpg'),
          require('../assets/img/projects/p_4-6.jpg'),
          require('../assets/img/projects/p_4-7.jpg'),
          require('../assets/img/projects/p_4-8.jpg'),
          require('../assets/img/projects/p_4-9.jpg'),
          require('../assets/img/projects/p_4-10.jpg'),
          require('../assets/img/projects/p_4-11.jpg'),
          require('../assets/img/projects/p_4-12.jpg'),
          require('../assets/img/projects/p_4-13.jpg'),
          require('../assets/img/projects/p_4-14.jpg'),
        ]
      },
      {
        id: 5,
        name: '"Чистое небо"',
        category: ['construction'],
        description: '<p>Жилой комплекс<br/>Общая площадь: 18 600 м²<br/> Заказчик: ООО "АК Барс Строй", 2011г.<br/>г. Казань</p>',
        mainImage: require('../assets/img/projects/p_5-1.jpg'),
        images: [
          require('../assets/img/projects/p_5-2.jpg'),
          require('../assets/img/projects/p_5-3.jpg'),
        ]
      },
      {
        id: 6,
        name: '"Таиф"',
        category: ['construction', 'planning'],
        description: '<p>Пристройка к офисному зданию<br/>Общая площадь: 13 400 м²<br/> Заказчик: ООО "Таиф", 2009г.</p>',
        mainImage: require('../assets/img/projects/p_6-1.jpg'),
        images: [
          require('../assets/img/projects/p_6-2.jpg'),
          require('../assets/img/projects/p_6-3.jpg'),
          require('../assets/img/projects/p_6-4.jpg'),
          require('../assets/img/projects/p_6-5.jpg'),
          require('../assets/img/projects/p_6-6.jpg'),
          require('../assets/img/projects/p_6-7.jpg'),
          require('../assets/img/projects/p_6-8.jpg'),
          require('../assets/img/projects/p_6-9.jpg'),
          require('../assets/img/projects/p_6-10.jpg'),
          require('../assets/img/projects/p_6-11.jpg'),
        ]
      },

    ],
  },
  getters: {
    getProjects: state => {
      return state.projects;
    },
    getProjectData: state => id => {
      return state.projects.find(project => project.id == id);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
