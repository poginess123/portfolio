<template>
  <div class="grid-container fluid body-container">
    
    <div class="grid-x grid-margin-x">
      <!-- Left Column -->
      <aside class="cell small-12 medium-4 large-5 large-offset-1 left-column">
        <h1>
          <a href="#">Steve Suyam</a>
        </h1>
        <h5 class="spacer">Web Developer</h5>
        <p class="description">
          Web developer with comprehensive experience in both Back-End and Front-End development.
        </p>
        <nav class="menu">
          <ul>
            <li>
              <a :class="{ active: activeSection === 'about' }" @click="jumpTo('about')">About</a>
            </li>
            <li>
              <a :class="{ active: activeSection === 'experience' }" @click="jumpTo('experience')">Experience</a>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Right Column -->
      <main ref="scrollableColumn" class="cell small-12 medium-8 large-6 right-column info-container">
        <section id="about">
          <h4 class="title mb-12">About</h4>
          <p class="mb-12">
            Dedicated and detail-oriented web developer with over 8 years of comprehensive experience in both front- and back-end development.
            Proven track record of building creative, usable, and high-performance websites tailored to user needs.
            Highly proficient in modern programming languages, frameworks, and industry-standard best practices.
            Eager to continually learn and apply new technologies to deliver impactful digital solutions.
          </p>
          <p class="mb-12">
            I am currently working as a Web Developer at Complete Business Online, where I contribute to the development of modules for the
            company's innovative web development platform, insites.io.
            This platform empowers businesses to create dynamic and customizable websites with ease,
            streamlining the web development process through efficient tools and features. My role involves building scalable,
            reusable components and optimizing the platform to deliver exceptional performance and user experience.
          </p>
          <p>
            Throughout my career, I’ve had the privilege of developing web applications in a wide range of environments,
            from large corporations with complex, high-scale requirements to dynamic start-ups that demand agility and innovation.
            These experiences have allowed me to adapt to various workflows, collaborate with cross-functional teams, and deliver solutions
            tailored to unique business needs. Whether working within structured enterprise systems or fast-paced start-up ecosystems,
            I’ve consistently applied my technical expertise to create efficient, user-centric web applications.
          </p>
        </section>
        <section id="experience">
          <h4 class="title">Experience</h4>
          <ol class="ordered-list">
            <li v-for="(item,key) in experiencesTyped" :key="key" class="mb-12">
              <div class="experience-container">
                <header class="experience-header">{{item.start_year}} to {{item.end_year}}</header>
                <div class="experience-details">
                  <h3>{{item.company_name}}</h3>
                  <p>
                    {{ item.details }}
                  </p>
                  <ul class="tags">
                    <li v-for="tool in item.tools" :key="tool">{{tool}}</li>
                  </ul>
                  <div class="samples-container mt-4">
                    <h3 class="mt-4">Relevant Projects:</h3>
                    <ul class="samples">
                      <li v-for="(sample,key) in item.samples" :key="key">
                        <h3 v-if="sample.link" class="has-link"><a :href="sample.link" target="_blank">{{ sample.title }}</a></h3>
                        <h3 v-else>{{sample.title}}</h3>
                        {{ sample.description }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

import { experiences } from "@/constants/experience";
const experiencesTyped: any = experiences;

const scrollableColumn = ref<HTMLDivElement | null>(null);
const activeSection = ref<string>('');
let observer: IntersectionObserver;

const syncScroll = (event: WheelEvent): void => {
  if (scrollableColumn.value) {
    // Calculate the amount to scroll
    const delta = event.deltaY;
    scrollableColumn.value.scrollTop += delta;
  }
};

const jumpTo = (section: string) => {
  // Get the target section based on the section parameter
  const targetSection = document.querySelector(`#${section}`);

  // If the section is found, scroll to it
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start',     // Align to the top of the viewport
    });
  }
}

// IntersectionObserver callback to update active section
const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      activeSection.value = sectionId;
    }
  });
};

onMounted(() => {
  window.addEventListener("wheel", syncScroll, { passive: false });
  // Initialize IntersectionObserver
  observer = new IntersectionObserver(observerCallback, {
    root: scrollableColumn.value,
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  // Observe each section
  const sections = document.querySelectorAll('main section');
  sections.forEach((section) => observer.observe(section));
});

onUnmounted(() => {
  window.removeEventListener("wheel", syncScroll);
  // Clean up observer when component is destroyed
  if (observer) {
    observer.disconnect();
  }
});

</script>