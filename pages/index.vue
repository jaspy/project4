<template>
  <v-app>
    <section class="container">
      <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
      <h1 class="title">
        USERS
      </h1>
      <h1 class="red">Hello {{ name }}!</h1>
      <ul class="users">
        <li v-for="(user, index) in users" :key="index" class="user">
          <nuxt-link :to="{ name: 'id', params: { id: index } }">
            {{ user.name }}
          </nuxt-link>
        </li>
      </ul>

      {{ counter }}
    </section>
  </v-app>
</template>

<script>
import axios from '~/plugins/axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return { name: 'world' };
  },
  computed: {
    ...mapGetters(['counter']),
  },

  async asyncData() {
    const { data } = await axios.get('/api/users');
    return { users: data };
  },

  head() {
    return {
      title: 'Users',
    };
  },
};
</script>

<style scoped lang="scss">
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
</style>
