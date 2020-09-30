<template>
  <div class="Page skills">
    <Header bgText="skills" text="what I'm great at and what I'm learning" />
    <div class="table">
      <div class="column">
        <div class="column-title">
          <DevIcon class="column-title__img" />
          <h4 class="mt-0 column-title__text">Web and Mobile Development</h4>
        </div>
        <div class="column-content">
          <SkillList :skills="skills[0]" />
        </div>
      </div>
      <div class="column">
        <div class="column-title">
          <ToolsIcon class="column-title__img" />
          <h4 class="mt-0 column-title__text">Other Skills</h4>
        </div>
        <div class="column-content">
          <SkillList :skills="skills[1]" />
        </div>
      </div>
    </div>
    <p>⦿ - years of experience</p>
  </div>
</template>

<script>
import { markRaw } from "vue";
import Header from "@/components/layout/header";
import DevIcon from "@/assets/icons/dev";
import ToolsIcon from "@/assets/icons/tools";
import SkillList from "./details/skillList";

const SKILLS = [
  {
    languages: {
      Javascript: 2,
      Typescript: 2,
      HTML: 2,
      "CSS (Sass, Less)": 2,
      Python: 1
    },
    frameworks: [
      ["React", "React Native", "Vue", "Gatsby.js"],
      ["AntDesign", "Bootstrap", "MaterialUI", "ThreeJs", "FramerMotion"],
      ["GraphQL", "Serverless", "Aglio", "Dredd"],
      ["Mocha", "Chakram"],
      ["Django"]
    ],
    "cloud services": [
      ["AWS", "GCP (BigQuery)", "Firebase"],
      ["MongoDB", "PostgreSQL", "Redis"]
    ],
    tools: [
      ["Docker", "TravisCI"],
      ["Figma", "Framer"],
      ["Git", "Bash", "Debian", "Kali"]
    ]
  },
  {
    languages: {
      C: 1,
      "Embedded-C": 1,
      "Verilog HDL": 1,
      ARM: 1,
      Assembly: 1
    },
    software: [
      ["JIRA", "ZenHub"],
      ["Notion"],
      ["Photoshop", "Illustrator"],
      ["Unity3D", "SOLIDWORKS"]
    ]
  }
];

export default {
  name: "AboutSkills",
  components: {
    Header,
    DevIcon: markRaw(DevIcon),
    ToolsIcon: markRaw(ToolsIcon),
    SkillList
  },
  data() {
    return {
      skills: SKILLS
    };
  }
};
</script>

<style scoped lang="scss">
.table {
  width: 80%;
  margin: 0 auto;
  display: flex;
  border: 1px solid rgba($dark, 0.5);
  border-radius: 1rem 1rem 0 0;
  flex-direction: column;
  overflow: hidden;

  .column {
    .column-title {
      background: $dark;
      padding: 2rem;

      .column-title__img {
        max-width: 3rem;
      }

      .column-title__text {
        color: $white;
      }
    }
  }

  @include for-tablet-landscape-up {
    flex-direction: row;

    .column {
      flex: 50%;
      border: 1px solid rgba($dark, 0.5);

      &:first-child {
        border-radius: 2rem 0 0 0;
      }

      &:last-child {
        border-radius: 0 2rem 0 0;
      }

      .column-content {
        margin: 2rem;
      }
    }
  }
}
</style>
