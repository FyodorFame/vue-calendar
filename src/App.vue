<template>
  <v-app>
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

const temp = () => ({
  user: null
})

console.log('temp call ', temp())

export default {
  name: 'App',

  components: {
    Calendar,
  },

  data: () => ({
    user: null
  }),
};
</script>
