<template>
    <div>
      <component :is="resolvedComponent" v-if="resolvedComponent" />
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["topicName"],
    data() {
      return {
        resolvedComponent: null,
      };
    },
    async created() {
      try {
        // Dynamically import the specific component based on topicName
        const component = await import(
          `./${this.topicName.replace(/%20/g, "")}.vue`
        );
        this.resolvedComponent = component.default;
      } catch (err) {
        console.error("Failed to load component:", err);
        // Optionally, set a fallback component or error message
      }
    },
  };
  </script>