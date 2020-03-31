<template>
    <div class="main">
        <div class="w-2/3 flex justify-between mx-auto">
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'all'}" @click="filterProjects('all')">Все</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'construction'}" @click="filterProjects('construction', 'construction')">Строительство</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'design'}" @click="filterProjects('design', 'design')">Дизайн</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'interiors'}" @click="filterProjects('interiors', 'interiors')">Интерьеры</div>
            <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'planning'}" @click="filterProjects('planning', 'planning')">Проектирование</div>
        </div>
        <div class="w-full mt-8 pl-6 pr-6">
            <transition-group name="list-fade" class="grid gap-3 grid-cols-3">
                <div class="flex border border-gray-300 p-4" v-for="project in filteredProjects.slice(0, amount)" :key="project.id">
                    <div>{{ project.name }}</div>
                </div>
            </transition-group>
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
            description: 'Описание проекта 1',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 2,
            name: 'Проект 2',
            category: 'construction',
            description: 'Описание проекта 2',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 3,
            name: 'Проект 3',
            category: 'construction',
            description: 'Описание проекта 2',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 4,
            name: 'Проект 4',
            category: 'design',
            description: 'Описание проекта 4',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 5,
            name: 'Проект 5',
            category: 'design',
            description: 'Описание проекта 5',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 6,
            name: 'Проект 6',
            category: 'design',
            description: 'Описание проекта 6',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 7,
            name: 'Проект 7',
            category: 'design',
            description: 'Описание проекта 3',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 8,
            name: 'Проект 8',
            category: 'interiors',
            description: 'Описание проекта 8',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 9,
            name: 'Проект 9',
            category: 'interiors',
            description: 'Описание проекта 8',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 10,
            name: 'Проект 10',
            category: 'interiors',
            description: 'Описание проекта 8',
            imageLink: '../assets/img/slider_1.jpeg'
          },
          {
            id: 11,
            name: 'Проект 11',
            category: 'interiors',
            description: 'Описание проекта 8',
            imageLink: '../assets/img/slider_1.jpeg'
          },
        ],
        filteredProjects: []
      }
    },
    methods: {
      filterProjects(activeCategory, category) {
        this.activeProjectCategory = activeCategory;
        if(this.activeProjectCategory === 'all') return this.filteredProjects = this.projects;
        this.filteredProjects = this.projects.filter( project => project.category === category );
        return this.filteredProjects;
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

</style>
