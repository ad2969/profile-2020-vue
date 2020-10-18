<template>
  <div class="Page skills">
    <Header bgText="skills" text="what I'm great at and what I'm learning" />
    <div class="table">
      <div
        class="column"
        v-for="(skillCategory, index) in skills"
        :key="skillCategory.title"
      >
        <div class="column-title">
          <component :is="skillCategory.icon" class="column-title__img" />
          <!-- <DevIcon class="column-title__img" /> -->
          <h4 class="mt-0 column-title__text">{{ skillCategory.title }}</h4>
        </div>
        <div class="column-content">
          <SkillList
            :skills="skillCategory.skillList"
            :filtered="filtered[index]"
          />
          <h4
            className="column-more t--hl"
            @click="filtered[index] = !filtered[index]"
          >
            {{ filtered[index] ? "see more..." : "see less..." }}
          </h4>
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
    title: "Web and Mobile Development",
    icon: DevIcon,
    skillList: {
      languages: [
        [{ text: "Javascript", years: 2 }],
        [{ text: "Typescript", years: 2 }],
        [{ text: "HTML", years: 2, hide: true }],
        [{ text: "CSS (Sass, Less)", years: 2 }],
        [{ text: "Python", years: 1 }]
      ],
      frameworks: [
        [
          { text: "React" },
          { text: "React Native", hide: true },
          { text: "Vue" },
          { text: "Gatsby.js", hide: true }
        ],
        [
          { text: "AntDesign", hide: true },
          { text: "Bootstrap", hide: true },
          { text: "MaterialUI", hide: true },
          { text: "ThreeJs", hide: true },
          { text: "FramerMotion", hide: true }
        ],
        [
          { text: "GraphQL" },
          { text: "Serverless" },
          { text: "Aglio", hide: true },
          { text: "Dredd", hide: true }
        ],
        [
          { text: "Mocha", hide: true },
          { text: "Chakram", hide: true }
        ],
        [{ text: "Django" }]
      ],
      "cloud services": [
        [{ text: "AWS" }, { text: "GCP (BigQuery)" }, { text: "Firebase" }],
        [
          { text: "MongoDB" },
          { text: "PostgreSQL" },
          { text: "Redis", hide: true }
        ]
      ],
      tools: [
        [{ text: "Docker" }, { text: "TravisCI" }],
        [
          { text: "Figma", hide: true },
          { text: "Framer", hide: true }
        ],
        [{ text: "Git" }, { text: "Bash" }, { text: "Linux" }]
      ]
    }
  },
  {
    title: "Other Skills",
    icon: ToolsIcon,
    skillList: {
      languages: [
        [{ text: "C", years: 1 }],
        [{ text: "Embedded-C", years: 1, hide: true }],
        [{ text: "Verilog HDL", years: 1 }],
        [{ text: "ARM", years: 1, hide: true }],
        [{ text: "Assembly", years: 1, hide: true }]
      ],
      software: [
        [{ text: "JIRA" }, { text: "ZenHub" }],
        [{ text: "Notion" }],
        [
          { text: "Photoshop", hide: true },
          { text: "Illustrator", hide: true }
        ],
        [
          { text: "Unity3D", hide: true },
          { text: "SOLIDWORKS", hide: true }
        ]
      ]
    }
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
      skills: SKILLS,
      filtered: new Array(SKILLS.length).fill(true)
    };
  }
};
</script>

<style scoped lang="scss">
.table {
  margin: 0 auto;
  display: flex;
  border: 1px solid rgba($dark, 0.1);
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

    .column-content {
      margin: 2rem;

      .column-more {
        @include anim-h--scale(1.1);
      }
    }
  }

  @include for-tablet-landscape-up {
    flex-direction: row;
    width: 80%;

    .column {
      flex: 50%;
      border: 1px solid rgba($dark, 0.1);

      &:first-child {
        border-radius: 2rem 0 0 0;
      }

      &:last-child {
        border-radius: 0 2rem 0 0;
      }
    }
  }
}
</style>
