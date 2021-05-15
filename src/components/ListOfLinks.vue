<template>
  <div class="hello">
    <h3>My List of Links 🙌</h3>
    <ul>
      <li v-for="item in list" :key="item.url">
        <a :href="item.url">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface ILink {
  text: string;
  url: string;
}

export default defineComponent({
  name: 'ListOfLinks',
  props: {
    list: {
      type: Array as PropType<ILink[]>,
      required: true
    },
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
