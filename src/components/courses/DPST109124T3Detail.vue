<template>
  <div class="course-content">
    
    <div class="section">
      <h3>Tutorial Slides</h3>
      <div class="resource-list">
        <div v-for="(slide, index) in slides" 
             :key="index" 
             class="resource-card">
          <div class="resource-info">
            <h4>{{ slide.title }}</h4>
            <p>{{ slide.week }}</p>
          </div>
          <a :href="slide.url" 
             target="_blank" 
             class="download-btn">
            view
          </a>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>Exam Revision</h3>
      <div class="resource-list">
        <div v-for="(exam, index) in exams" 
             :key="index" 
             class="resource-card">
          <div class="resource-info">
            <h4>{{ exam.title }}</h4>
            <p>{{ exam.term }}</p>
          </div>
          <button 
            class="view-btn" 
            @click="goToRevision(exam)">
            view
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DPST109124T3Detail',
  props: {
    courseCode: {
      type: String,
      required: true
    },
    courseType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      slides: [
        {
          title: 'Week 2 Tutorial',
          week: 'Week 2',
          url: '#'
        }
      ],
      exams: [
        {
          title: 'Final Exam Revision',
          term: '24T3',
          id: 'final'
        }
      ]
    }
  },
  methods: {
    goToRevision(exam) {
      this.$router.push(`/course/DPST109124T3/revision/${exam.id}`)
    }
  }
}
</script>

<style scoped>
.course-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section {
  margin-bottom: 2rem;
}

.resource-list {
  display: grid;
  gap: 1rem;
}

.resource-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.resource-card:hover {
  background: #f1f3f5;
}

.resource-info h4 {
  margin: 0;
  color: #2c3e50;
}

.resource-info p {
  margin: 0.25rem 0 0 0;
  color: #666;
  font-size: 0.875rem;
}

.download-btn {
  background: #FFD700;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: opacity 0.2s;
}

.download-btn:hover {
  opacity: 0.8;
}

.view-btn {
  background: #FFD700;
  color: #2c3e50;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.view-btn:hover {
  background: #ffd900;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>