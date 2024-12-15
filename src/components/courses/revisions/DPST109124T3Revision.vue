<template>
  <div class="revision-content">
    <div class="revision-header">
      <button class="back-button" @click="$router.go(-1)">Back</button>
      <h2>DPST1091 24T3 Final Revision</h2>
    </div>

    <div class="revision-sections">
      <div class="revision-section">
        <h3>Course Topics</h3>
        <div class="topic-grid">
          <div
            v-for="(topic, index) in topics"
            :key="index"
            class="topic-card"
            @click="navigateToExercise(topic.name)"
          >
            <h4>{{ topic.name }}</h4>
            <ul>
              <li v-for="(point, idx) in topic.points" :key="idx">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DPST109124T3Revision",
  data() {
    return {
      topics: [
        {
          name: "Basics",
          points: ["Variables", "Data Types", "Basic Operations"],
        },
        {
          name: "ControlFlow",
          points: ["If Statements", "Loops (while, for)", "Switch Cases"],
        },
        {
          name: "Functions",
          points: [
            "Function Declaration",
            "Parameters",
            "Return Values",
            "Scope",
          ],
        },
        {
          name: "Arrays",
          points: [
            "Array Declaration",
            "Array Operations",
            "Multi-dimensional Arrays",
          ],
        },
        {
          name: "Linked Lists",
          points: ["Node Structure", "List Operations", "Traversal"],
        },
        {
          name: "Characters & Strings",
          points: [
            "Character Operations",
            "String Functions",
            "String Manipulation",
          ],
        },
        {
          name: "Pointers",
          points: ["Pointer Basics", "Memory Addresses", "Pointer Operations"],
        },
        {
          name: "Structs",
          points: [
            "Structure Definition",
            "Member Access",
            "Nested Structs",
          ],
        },
        {
          name: "Memory Management",
          points: ["Memory Allocation", "malloc/free", "Memory Leaks"],
        },
        {
          name: "Multi-file Programs",
          points: ["Header Files", "Source Files", "Compilation Process"],
        },
      ],
    };
  },
  methods: {
    navigateToExercise(topicName) {
      // Get the courseCode and revisionId dynamically from the route parameters
      const courseCode = this.$route.params.courseCode;
      const revisionId = this.$route.params.revisionId;

      // Navigate to the exercise page with dynamic courseCode and revisionId
      this.$router.push(`/course/${courseCode}/revision/${revisionId}/exercise/${topicName}`);
    },
  },
};
</script>

<style scoped>
.revision-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.revision-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.back-button {
  background: #ffd700;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.back-button:hover {
  background: #ffd900;
  transform: translateY(-1px);
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.topic-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.topic-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.topic-card h4 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.topic-card ul {
  margin: 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.topic-card li {
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.9rem;
}

.revision-section {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.revision-section h3 {
  margin-top: 0;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}
</style>