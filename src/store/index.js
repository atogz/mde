import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        name: 'Перинатальный центр',
        category: 'construction',
        description: '<p>Общая площадь: 27 600 м²<br/> Заказчик: ООО РТ "Соцстрой", 2017г.<br/>г. Ульяновск</p>',
        mainImage: require('../assets/img/projects/p_1-1.jpg'),
        images: [
          require('../assets/img/projects/p_1-2.jpg'),
        ]

      },
      {
        id: 2,
        name: 'Проект 2',
        category: 'construction',
      },
      {
        id: 3,
        name: 'Проект 3',
        category: 'construction',
      },
      {
        id: 4,
        name: 'Проект 4',
        category: 'design',
      },
      {
        id: 5,
        name: 'Проект 5',
        category: 'design',
      },
      {
        id: 6,
        name: 'Проект 6',
        category: 'design',
      },
      {
        id: 7,
        name: 'Проект 7',
        category: 'design',
      },
      {
        id: 8,
        name: 'Проект 8',
        category: 'interiors',
      },
      {
        id: 9,
        name: 'Проект 9',
        category: 'interiors',
      },
      {
        id: 10,
        name: 'Проект 10',
        category: 'interiors',
      },
      {
        id: 11,
        name: 'Проект 11',
        category: 'interiors',
      },
      {
        id: 12,
        name: 'Проект 12',
        category: 'planning',
      },
      {
        id: 13,
        name: 'Проект 13',
        category: 'planning',

      },
      {
        id: 14,
        name: 'Проект 14',
        category: 'planning',
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
