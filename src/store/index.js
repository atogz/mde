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
        mainImage: require('../assets/img/projects/p_1-1.jpg'),
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
