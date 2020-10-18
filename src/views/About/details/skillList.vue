<template>
  <div
    v-for="([category, lines], index) in Object.entries(skills)"
    :key="'category' + index"
    class="skill-list"
  >
    <h4 class="skill-list__title t--c t--hl mb-0">
      my {{ filtered ? "favourite" : "known" }} {{ category }}:
    </h4>

    <div>
      <p v-for="skillset in lines" :key="skillset" class="skill-list__line">
        {{
          skillset
            .reduce((accumulator, skill) => {
              if (filtered && skill.hide) return accumulator;
              else
                return [
                  ...accumulator,
                  skill.text +
                    (skill.years ? " " + "⦿".repeat(skill.years) : "")
                ];
            }, [])
            .join(", ")
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillList",
  props: {
    filtered: {
      type: Boolean,
      default: true
    },
    skills: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.skill-list {
  margin: 2rem;
}

.skill-list__title {
  line-height: 2rem;
  margin-bottom: 1rem;
}

.skill-list__line {
  margin: 0;
}
</style>
