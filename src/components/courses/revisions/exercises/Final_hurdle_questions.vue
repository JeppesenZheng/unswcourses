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
          <p class="description">{{ item.description }}</p>
  
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
          <div></div>
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
      showModal: false,
      selectedQuestion: null,
      sampleOutputs: {
        'Final_hurdle_questions': [
          {
            question: 'Linked List Product Calculation',
            description: `Write a function product that calculates the sum of products of corresponding elements in two linked lists.

            - If one linked list is longer than the other, 
              ignore the extra elements

            - The function should return the sum of products

            - Each linked list node contains an integer value 
              and a pointer to the next node`,
            examples: [
              {
                input: `List1: 1 -> 2 -> 3
List2: 4 -> 5 -> 6`,
                output: '1*4 + 2*5 + 3*6 = 32'
              },
              {
                input: `List1: 1 -> 2 -> 3 -> 4
List2: 2 -> 3`,
                output: '1*2 + 2*3 = 8 (ignoring 3 and 4 from List1)'
              }
            ],
          }
        ],
      }
    };
  },
};
</script>


<style scoped>
.description {
  white-space: pre-line;
}

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
  white-space: pre-line;
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