<template>
    <div class="main pb-6">
        <transition name="slide-fade">
            <div class="w-2/3 flex justify-between mx-auto xxl:w-2/4" v-if="loaded">
                <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'all'}" @click="filterProjects('all')">Все</div>
                <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'construction'}" @click="filterProjects('construction', 'construction')">Строительство</div>
                <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'design'}" @click="filterProjects('design', 'design')">Дизайн</div>
                <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'interiors'}" @click="filterProjects('interiors', 'interiors')">Интерьеры</div>
                <div class="category-button uppercase border border-gray-500 px-4 py-2 text-gray-500 cursor-pointer" :class="{'category-button--active': activeProjectCategory === 'planning'}" @click="filterProjects('planning', 'planning')">Проектирование</div>
            </div>
        </transition>


        <div class="w-full mt-8 pl-6 pr-6">
            <transition-group name="list-fade" class="grid gap-3 grid-cols-3" v-if="filteredProjects.length">
                <div class="flex border border-gray-300" v-for="project in filteredProjects.slice(0, amount)" :key="project.id" @mouseenter="showProjectData = project.id" @mouseleave="showProjectData = null">
                    <router-link :to="{ name: 'Project',  params: { id: project.id, project: project } }" class="relative flex">
                    <img class="project-image cursor-pointer" :src="project.mainImage" :class="{'project-data--hovered': showProjectData === project.id}"/>
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
            <div class="w-full text-center" v-else>{{ errorMessage }}</div>
        </div>


            <div class="w-full mt-8 pl-6 pr-6 flex justify-center" v-if="amount < filteredProjects.length">
                <transition name="component-fade">
                    <div class="px-8 py-4 bg-accentColor cursor-pointer text-white font-bold flex justify-between items-center" v-if="showMoreProjectsButton" @click="showMoreProjects()">
                        <span>Показать больше</span>
                        <font-awesome-icon :icon="['fa', 'angle-right']" class="text-white ml-2 text-xl"/>
                    </div>
                </transition>
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
        loaded: false,
        activeProjectCategory: 'all',
        projects: [],
        filteredProjects: [],
        showProjectData: null,
        showMoreProjectsButton: true,
        errorMessage: '',
      }
    },
    methods: {
      filterProjects(activeCategory, category) {
        this.activeProjectCategory = activeCategory;
        if(this.activeProjectCategory === 'all') return this.filteredProjects = this.projects;
        this.filteredProjects = this.projects.filter( project =>{
         if(project.category.includes(category)) {
           return project;
         }
        });
        if(!this.filteredProjects.length) this.errorMessage = 'Проектов в данной категории не найдено.';
        return this.filteredProjects;
      },

      showMoreProjects() {
        this.showMoreProjectsButton = false;
        this.amount = this.amount + 3;
        setTimeout( () => {
          this.showMoreProjectsButton = true;
        }, 500)
      }
    },
    mounted() {
      this.projects = this.$store.getters.getProjects;
      this.filteredProjects = this.projects;
      this.loaded = true;
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
