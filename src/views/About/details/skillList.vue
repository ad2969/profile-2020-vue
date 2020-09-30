<template>
  <div class="column-content">
    <div
      v-for="([category, lines], index) in Object.entries(skills)"
      :key="'category' + index"
      class="skill-list"
    >
      <h4 class="t--c t--hl t--b mb-0">my favourite {{ category }}:</h4>

      <!-- If language -->
      <div v-if="category === 'languages'">
        <p
          v-for="[language, years] in Object.entries(lines)"
          :key="language"
          class="skill-list__line"
        >
          {{ language }} {{ "⦿".repeat(years) }}
        </p>
      </div>

      <!-- If a list of skills -->
      <div v-else>
        <p v-for="skillset in lines" :key="skillset" class="skill-list__line">
          {{ skillset.join(", ") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillList",
  props: {
    skills: {
      type: Object
    }
  },
  created() {
    console.log(this.skills);
  }
};
</script>

<style scoped lang="scss">
.skill-list {
  margin: 2rem;
  margin-bottom: 5rem;
}

.skill-list__line {
  margin: 0;
}
</style>
