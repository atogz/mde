<template>
    <div class="main">
        <div class="w-2/3 flex justify-between mx-auto xxl:w-2/4">
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'all'}" @click="filterProjects('all')">Все</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'construction'}" @click="filterProjects('construction', 'construction')">Строительство</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'design'}" @click="filterProjects('design', 'design')">Дизайн</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'interiors'}" @click="filterProjects('interiors', 'interiors')">Интерьеры</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'planning'}" @click="filterProjects('planning', 'planning')">Проектирование</div>
        </div>
        <div class="w-full mt-8 pl-6 pr-6">
            <transition-group name="list-fade" class="grid gap-3 grid-cols-3">
                <div class="flex border border-gray-300" v-for="project in filteredProjects.slice(0, amount)" :key="project.id" @mouseenter="showProjectData = project.id" @mouseleave="showProjectData = null">
                    <router-link :to="'/projects/' + project.id" class="relative flex">
                    <img class="project-image cursor-pointer" :src="project.imageLink" :class="{'project-data--hovered': showProjectData === project.id}"/>
                    <transition name="list-fast" mode="out-in">
                            <div class="project-data w-full absolute left-0" v-if="showProjectData === project.id">
                                <div class="w-full text-center text-white uppercase font-bold">{{ project.name }}</div>
                                <div class="w-full flex justify-center items-center">
                                    <img src="../assets/img/project_data_line.png" class="w-full pr-4">
                                    <div class="mt-2">
                                        <font-awesome-icon :icon="['fa', 'link']" class="text-accentColor text-xl ml-2"/>
                                    </div>
                                    <img src="../assets/img/project_data_line.png" class="w-full pl-8">
                                </div>
                            </div>
                    </transition>
                    </router-link>
                </div>
            </transition-group>
        </div>

        <div class="w-full mt-8 pl-6 pr-6 flex justify-center" v-if="amount < filteredProjects.length">
            <div class="px-8 py-4 bg-accentColor cursor-pointer text-white font-bold flex justify-between items-center" v-if="showMoreProjectsButton" @click="showMoreProjects()">
                <span>Показать больше</span>
                <font-awesome-icon :icon="['fa', 'angle-right']" class="text-white ml-2 text-xl"/>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "ProjectsGrid",
    props: {
      amount: Number
    },
    data() {
      return {
        activeProjectCategory: 'all',
        projects: [
          {
            id: 1,
            name: 'Проект 1',
            category: 'construction',
            imageLink: require('../assets/img/projects/construction_1.jpg')
          },
          {
            id: 2,
            name: 'Проект 2',
            category: 'construction',
            imageLink: require('../assets/img/projects/construction_2.jpg')
          },
          {
            id: 3,
            name: 'Проект 3',
            category: 'construction',
            imageLink: require('../assets/img/projects/construction_3.jpg')
          },
          {
            id: 4,
            name: 'Проект 4',
            category: 'design',
            imageLink: require('../assets/img/projects/design_1.jpg')
          },
          {
            id: 5,
            name: 'Проект 5',
            category: 'design',
            imageLink: require('../assets/img/projects/design_2.jpg')
          },
          {
            id: 6,
            name: 'Проект 6',
            category: 'design',
            imageLink: require('../assets/img/projects/design_3.jpg')
          },
          {
            id: 7,
            name: 'Проект 7',
            category: 'design',
            imageLink: require('../assets/img/projects/design_4.jpg')
          },
          {
            id: 8,
            name: 'Проект 8',
            category: 'interiors',
            imageLink: require('../assets/img/projects/interiors_1.jpg')
          },
          {
            id: 9,
            name: 'Проект 9',
            category: 'interiors',
            imageLink: require('../assets/img/projects/interiors_2.jpg')
          },
          {
            id: 10,
            name: 'Проект 10',
            category: 'interiors',
            imageLink: require('../assets/img/projects/interiors_3.jpg')
          },
          {
            id: 11,
            name: 'Проект 11',
            category: 'interiors',
            imageLink: require('../assets/img/projects/interiors_4.jpg')
          },
          {
            id: 12,
            name: 'Проект 12',
            category: 'planning',
            imageLink: require('../assets/img/projects/planning_1.jpg')
          },
          {
            id: 13,
            name: 'Проект 13',
            category: 'planning',
            imageLink: require('../assets/img/projects/planning_2.jpg')
          },
          {
            id: 14,
            name: 'Проект 14',
            category: 'planning',
            imageLink: require('../assets/img/projects/planning_3.jpg')
          },
        ],
        filteredProjects: [],
        showProjectData: null,
        showMoreProjectsButton: true
      }
    },
    methods: {
      filterProjects(activeCategory, category) {
        this.activeProjectCategory = activeCategory;
        if(this.activeProjectCategory === 'all') return this.filteredProjects = this.projects;
        this.filteredProjects = this.projects.filter( project => project.category === category );
        return this.filteredProjects;
      },

      showMoreProjects() {
        this.showMoreProjectsButton = false;
        this.amount = this.amount + 3;
        setTimeout( () => {
          this.showMoreProjectsButton = true;
        }, 1000)
      }
    },
    mounted() {
      this.filteredProjects = this.projects;
    }
  }
</script>

<style scoped>
 .category-button {
     transition: 0.3s ease;
     font-weight: 600;
 }
.category-button:hover, .category-button--active {
    background-color: #ffa60a;
    border-color: #ffa60a;
    color: #fff;

}

.project-image {
    transition: 0.6s ease;
}
.project-data {
    top: 50%;
    display: flex;
    flex-direction: column;
}

.project-data--hovered {
    filter: brightness(50%);
 }

</style>
