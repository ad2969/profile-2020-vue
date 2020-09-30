<template>
  <div class="Page work">
    <Header bgText="work" text="where I've been" />
    <div class="work-timeline">
      <img
        v-for="job in jobs"
        :key="'work-img-' + job.index"
        :id="job.index + ' ' + currentData.index"
        :class="
          job.index === currentData.index ? 'work-img active' : 'work-img'
        "
        :src="job.image"
        @click="changeJob(job.index)"
      />
    </div>
    <div class="work-content">
      <h4 class="work-title">
        <span class="t--hl t--b">{{ currentData.title }}</span>
        &nbsp;@&nbsp;{{ currentData.company }}
      </h4>
      <h4 class="work-details">
        {{ currentData.date }}&nbsp;•&nbsp;{{ currentData.location }}
      </h4>
      <p class="work-description">{{ currentData.description }}</p>
      <div class="work-skills">
        <span class="tag t--c" v-for="skill in currentData.skills" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import SemiosLogo from "@/assets/logos/semios.png";
import QuestionMark from "@/assets/logos/question.png";

const JOBS = {
  0: {
    index: 0,
    company: "SemiosBIO",
    title: "Full-Stack Javascript Developer Co-Op",
    date: "January to December 2020",
    location: "Vancouver, BC",
    description:
      "Diving into my first real job experience, I was hired by SemiosBIO to assist with the development of their customer & internal applications, which receive, evaluate, and display over 400M pieces of data from field devices daily. This is where I picked up most of my knowledge in web application development.",
    // markRaw prevents it from being "reactive"
    skills: [
      "responsive web development",
      "Internet of Things",
      "Cloud Services (AWS, GCP)"
    ],
    image: SemiosLogo
  },
  999: {
    index: 999,
    company: "My next company",
    title: "Product Manager/Software Developer Co-op",
    date: "Winter/Summer 2020",
    location: "Anywhere!",
    description:
      "My future is currently open to opportunities. I've recently developed an interest in product/project management, in the hopes of pursuing a career in technical project management/technology consulting. If you know an opportunity and think I will be a good fit, feel free to contact me!",
    // markRaw prevents it from being "reactive"
    skills: [],
    image: QuestionMark
  }
};

export default {
  name: "AboutWork",
  components: {
    Header
  },
  data() {
    return {
      currentData: Object.values(JOBS)[0],
      jobs: Object.values(JOBS)
    };
  },
  methods: {
    changeJob(index) {
      this.currentData = JOBS[index];
    }
  }
};
</script>

<style scoped lang="scss">
.work {
  margin-bottom: 2rem;

  .work-content {
    width: 90%;
    margin: 0 auto;

    @include for-phone-only {
      width: 100%;
    }
  }

  .work-details {
    opacity: 0.4;
  }
  .work-description {
    text-align: left;
  }
  .work-skills {
    @include flex-row;
    flex-wrap: wrap;

    @include for-phone-only {
      margin-left: 0;
    }
  }

  .work-timeline {
    @include flex-row;
    justify-content: space-between;
    padding: 0 0 3rem 0;
    position: relative;
    width: 100%;

    .work-img {
      max-height: 5rem;
      max-width: 5rem;
      width: 5rem;
      object-fit: scale-down;
      padding: 0.5rem;
      margin: 0.5rem;
      border-radius: 50%;
      background: $white;
      z-index: 2;
      @include anim-h--scale;
      box-shadow: 0 0 1rem 0.5rem rgba($black, 0.1);

      &.active {
        box-shadow: 0 0 2rem 1rem rgba($dark, 0.2);
      }
    }

    &:before {
      display: inline-block;
      content: "";
      border-top: 1px solid black;
      position: absolute;
      z-index: 1;
      margin: 0 0.5rem;
      width: calc(100% - 1rem);
    }
  }
}
</style>
