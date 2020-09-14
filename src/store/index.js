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
      {
        id: 7,
        name: '"Южный"',
        category: ['construction', 'interiors'],
        description: '<p>Торгово-развлекательный комплекс<br/>Общая площадь: 56 700 м²<br/> Заказчик: ООО "Каэстройинвест", 2010г.</p>',
        mainImage: require('../assets/img/projects/p_7-1.jpg'),
        images: [
          require('../assets/img/projects/p_7-2.jpg'),
          require('../assets/img/projects/p_7-3.jpg'),
          require('../assets/img/projects/p_7-4.jpg'),
          require('../assets/img/projects/p_7-5.jpg'),
          require('../assets/img/projects/p_7-6.jpg'),
          require('../assets/img/projects/p_7-7.jpg'),
          require('../assets/img/projects/p_7-8.jpg'),
          require('../assets/img/projects/p_7-9.jpg'),
        ]
      },
      {
        id: 8,
        name: 'Театр русской драмы',
        category: ['reconstruction'],
        description: '<p>Общая площадь: 10 000 м²<br/> Заказчик: Министерство культуры, 2007г. <br/>Республика Карелия</p>',
        mainImage: require('../assets/img/projects/p_8-1.jpg'),
        images: [
          require('../assets/img/projects/p_8-2.jpg'),
        ]
      },
      {
        id: 9,
        name: '"Валдай"',
        category: ['reconstruction'],
        description: '<p>Дом отдыха<br/>Общая площадь: 13 000 м²<br/> Заказчик: ООО "Кредо", 2009г.<br/> Пос. Рощино</p>',
        mainImage: require('../assets/img/projects/p_9-1.jpg'),
        images: [
          require('../assets/img/projects/p_9-2.jpg'),
          require('../assets/img/projects/p_9-3.jpg'),
        ]
      },
      {
        id: 10,
        name: '"Низами"',
        category: ['planning'],
        description: '<p>Концернтный комплекс<br/>Общая площадь: 9 490,7 м²<br/> Заказчик: ООО "Испа инжиниринг", 2006г.<br/>г. Баку</p>',
        mainImage: require('../assets/img/projects/p_10-1.jpg'),
        images: [
          require('../assets/img/projects/p_10-2.jpg'),
          require('../assets/img/projects/p_10-4.jpg'),
          require('../assets/img/projects/p_10-5.jpg'),
          require('../assets/img/projects/p_10-6.jpg'),
        ]
      },
      {
        id: 11,
        name: '"Буран"',
        category: ['planning', 'construction'],
        description: '<p>Спортивно-оздоровительный комплекс<br/>Общая площадь: 12 000 м²<br/> Заказчик: Министерство путей и сообщения, 2010г.<br/>г. Москва</p>',
        mainImage: require('../assets/img/projects/p_11-1.jpg'),
        images: [
          require('../assets/img/projects/p_11-5.jpg'),
          require('../assets/img/projects/p_11-3.jpg'),
          require('../assets/img/projects/p_11-4.jpg'),
          require('../assets/img/projects/p_11-2.jpg'),
        ]
      },
      {
        id: 12,
        name: 'Офисный центр',
        category: ['planning', 'construction'],
        description: '<p>Общая площадь: 6 000 м²<br/> Заказчик: ЗАО "Связь Апарт", 2006г.<br/>г. Москва</p>',
        mainImage: require('../assets/img/projects/p_12-1.jpg'),
        images: [
          require('../assets/img/projects/p_12-2.jpg'),
          require('../assets/img/projects/p_12-3.jpg'),
          require('../assets/img/projects/p_12-4.jpg'),
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
