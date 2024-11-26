<template>
  <div class="home-container">
    <nav class="navbar">
      <h1>UNSW Courses</h1>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.home-container {
  min-height: 100vh;
  background-color: #fff;
}

.navbar {
  background-color: #FFD700;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar h1 {
  color: #2c3e50;
  margin: 0;
}

.content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.courses-section {
  margin-bottom: 3rem;
}

.courses-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.course-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.course-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.course-card h3 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
}

.course-card p {
  color: #666;
  margin: 0 0 1rem 0;
}

.term {
  display: inline-block;
  background: #FFD700;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #2c3e50;
}
</style>
