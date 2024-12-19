<template>
  <div class="content">
    <!-- Tutoring Courses Section -->
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

    <!-- Learning Courses Section -->
    <div class="courses-section">
      <div class="section-header">
        <h2>Learning Courses</h2>
      </div>

      <div class="course-list">
        <div v-for="course in filteredLearningCourses" 
             :key="`${course.code}-${course.term}`" 
             class="course-card"
             @click="goToCourse(course)">
          <h3>{{ course.code }}</h3>
          <p>{{ course.name }}</p>
          <span class="term">{{ course.term }}</span>
        </div>
      </div>
    </div>

    <!-- Outside Courses Section -->
    <div class="courses-section">
      <div class="section-header">
        <h2>Outside Courses</h2>
      </div>

      <div class="course-list">
        <div v-for="course in filteredOutsideCourses" 
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
      ],
      learningCourses: [
        {
          code: 'COMP3121',
          name: 'Algorithm design and analysis',
          term: '24T3',
          type: 'learning',
          year: '2024'
        }
      ],
      outsideCourses: [
        {
          code: 'cs50',
          name: 'Introduction to Artificial intelligence with Python',
          term: 'semester1',
          type: 'outside',
          year: '2020'
        }
      ]
    }
  },
  computed: {
    availableYears() {
      const years = new Set([
        ...this.tutoringCourses.map(course => course.year),
        ...this.learningCourses.map(course => course.year),
        ...this.outsideCourses.map(course => course.year)
      ]);
      return Array.from(years).sort().reverse();
    },
    filteredTutoringCourses() {
      if (this.selectedYear === 'all') {
        return this.tutoringCourses;
      }
      return this.tutoringCourses.filter(course => course.year === this.selectedYear);
    },
    filteredLearningCourses() {
      if (this.selectedYear === 'all') {
        return this.learningCourses;
      }
      return this.learningCourses.filter(course => course.year === this.selectedYear);
    },
    filteredOutsideCourses() {
      if (this.selectedYear === 'all') {
        return this.outsideCourses;
      }
      return this.outsideCourses.filter(course => course.year === this.selectedYear);
    }
  },
  methods: {
    goToCourse(course) {
      const courseCode = `${course.code}${course.term}`;
      this.$router.push(`/course/${course.type}/${courseCode}`);
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
  align-items: center;
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

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.course-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.course-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.term {
  display: inline-block;
  background-color: #FFD700;
  color: #2c3e50;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
}
</style>