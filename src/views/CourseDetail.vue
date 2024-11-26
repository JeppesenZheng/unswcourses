<template>
  <div class="course-detail">
    <div class="course-header">
      <button class="back-button" @click="$router.go(-1)">Back</button>
      <h2>{{ courseCode }}</h2>
    </div>
    
    <Suspense>
      <template #default>
        <component 
          :is="courseComponent"
          :courseCode="courseCode"
          :courseType="courseType"
        />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template> 

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'CourseDetail',
  setup() {
    const route = useRoute()
    
    const courseType = computed(() => route.params.type)
    const courseCode = computed(() => route.params.code)
    
    const courseComponent = defineAsyncComponent(() => 
      import(`../components/courses/${route.params.code}Detail.vue`)
    )

    return {
      courseType,
      courseCode,
      courseComponent
    }
  }
}
</script>

<style scoped>
.course-detail {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.course-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.back-button {
  background: #FFD700;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
}
</style>