<template>
    <div class="exercise-page">
      <div class="revision-header">
        <button class="back-button" @click="$router.go(-1)">Back</button>
        <h2>DPST1091 24T3 Final Revision</h2>
      </div>
      <h2>Practice Questions for {{ topicName }}</h2>
  
      <div v-if="sampleOutputs[topicName]">
        <div v-for="(item, index) in sampleOutputs[topicName]" :key="index">
          <h3>Question: {{ item.question }}</h3>
          <p>{{ item.description }}</p>
  
          <!-- Sample Input and Output -->
          <div class="sample-output">
            <h4>Sample Input and Output:</h4>
            <ul>
              <li v-for="(example, idx) in item.examples" :key="idx">
                <p><strong>Input:</strong> {{ example.input }}</p>
                <p><strong>Output:</strong> {{ example.output }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div v-else>
        <p>No exercises available for this topic yet.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: "ExercisePage",
  data() {
    return {
    topicName: this.$route.params.topicName,
      sampleOutputs: {
        ControlFlow: [
          {
            question: "Check if a number is positive, negative, or zero.",
            description:
              "Write a program to determine if a number is positive, negative, or zero.",
            examples: [
              { input: "5", output: "The number is positive." },
              { input: "-2", output: "The number is negative." },
              { input: "0", output: "The number is zero." },
            ],
          },
          {
            question: "Check if a number is even or odd.",
            description:
              "Write a program to check whether a number is even or odd.",
            examples: [
              { input: "4", output: "The number is even." },
              { input: "7", output: "The number is odd." },
            ],
          },
          {
            question: "Check if a number is a multiple of 10.",
            description: "Write a program to check if a number is a multiple of 10.",
            examples: [
              { input: "30", output: "The number is a multiple of 10." },
              { input: "23", output: "The number is not a multiple of 10." },
            ],
          },
        ],
      },
    };
  },
};
  </script>
  
  <style scoped>
  .exercise-page {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .revision-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .back-button {
    background: #ffd700;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    margin-right: 1rem;
  }
  
  .back-button:hover {
    background: #ffcc00;
  }
  
  .sample-output {
    margin-top: 1rem;
    padding: 1rem;
    background: #f1f1f1;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .sample-output h4 {
    margin-bottom: 0.5rem;
  }
  
  .sample-output ul {
    list-style: none;
    padding: 0;
  }
  
  .sample-output li {
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .sample-output p {
    margin: 0.25rem 0;
  }
  </style>