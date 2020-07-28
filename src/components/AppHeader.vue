<template>
  <div>
    <form @submit.prevent="requestRefBook">
      <input type="text" v-model="Eingabe" />
      <button>Search now</button>
      <p>{{Eingabe}}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      Eingabe: "",
    };
  },
  methods: {
    requestRefBook(event) {
      console.log(event.target[0].value);
      this.$store.dispatch("requestRefBooks");
      //console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>