<template>
  <div class="content">
    <div class="courses-section">
      <div class="section-header">
        <h2>Tutoring Courses</h2>
        <div class="filter-group">
          <div class="custom-select">
            <select v-model="selectedYear" class="year-selector">
              <option value="all">All Years</option>
              <option v-for="year in availableYears" 
                      :key="year" 
                      :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="course-list">
        <div v-for="course in filteredTutoringCourses" 
             :key="`${course.code}-${course.term}`" 
             class="course-card"
             @click="goToCourse(course)">
          <h3>{{ course.code }}</h3>
          <p>{{ course.name }}</p>
          <span class="term">{{ course.term }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      selectedYear: 'all',
      tutoringCourses: [
        {
          code: 'DPST1091',
          name: 'Programming Fundamentals',
          type: 'tutoring',
          term: '24T3',
          year: '2024'
        },
        {
          code: 'DPST1091',
          name: 'Programming Fundamentals',
          type: 'tutoring',
          term: '23T3',
          year: '2023'
        }
      ],
      learningCourses: [
        {
          code: 'COMP3121',
          name: 'Computer Science Project',
          term: '24T3',
          type: 'learning',
          year: '2024'
        }
      ],
      outsideCourses: [
        {
          code: 'cs441n',
          name: 'Deep Learning',
          term: 'semester 1',
          type: 'outside',
          year: '2024'
        }
      ]
    }
  },
  computed: {
    availableYears() {
      const years = new Set(this.tutoringCourses.map(course => course.year))
      return Array.from(years).sort().reverse()
    },
    filteredTutoringCourses() {
      if (this.selectedYear === 'all') {
        return this.tutoringCourses
      }
      return this.tutoringCourses.filter(course => course.year === this.selectedYear)
    }
  },
  methods: {
    goToCourse(course) {
      const courseCode = `${course.code}${course.term}`
      this.$router.push(`/course/${course.type}/${courseCode}`)
    }
  }
}
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.filter-group {
  display: flex;
  gap: 1rem;
  align-items: center
}

.custom-select {
  position: relative;
  min-width: 120px;
}

.year-selector {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  padding: 0.6rem 2.5rem 0.6rem 1rem;
  border: 2px solid #FFD700;
  border-radius: 4px;
  background: #fff;
  font-size: 0.9rem;
  color: #2c3e50;
  cursor: pointer;
}

.year-selector:hover {
  border-color: #FFD700;
}

.year-selector:focus {
  outline: none;
  border-color: #FFD700;
  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
}

/* 其他现有样式保持不变 */
</style>