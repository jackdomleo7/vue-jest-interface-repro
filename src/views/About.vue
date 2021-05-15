<template>
  <div class="about">
    <h1>This is an about page</h1>
    <list-of-links :list="myList" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListOfLinks, { ILink } from '@/components/ListOfLinks.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ListOfLinks,
  },
  data () {
    return {
      myList: [
        {
          text: 'vue-jest repo',
          url: 'https://github.com/vuejs/vue-jest'
        },
        {
          text: 'vue-jest interface issue',
          url: 'https://github.com/vuejs/vue-jest/issues/189'
        }
      ] as ILink[]
    }
  }
});
</script>
