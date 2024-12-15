<template>
    <div class="tutorial-detail">
      <h2>{{ tutorialTitle }}</h2>
      <p>Content for {{ tutorialTitle }}</p>
      <a href="#" class="download-btn">Download PDF</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TutorialDetail',
    props: {
      courseCode: {
        type: String,
        required: true
      },
      week: {
        type: String,
        required: true
      }
    },
    computed: {
      tutorialTitle() {
        return `Tutorial for ${this.week}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .tutorial-detail {
    padding: 2rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  </style>
  