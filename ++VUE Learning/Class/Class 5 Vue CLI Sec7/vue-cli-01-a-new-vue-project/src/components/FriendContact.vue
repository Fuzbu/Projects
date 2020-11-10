<template>
  <li>
    <h1>{{ friend.name }}</h1>
    <button v-on:click="toggleDetails">
      Show Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Snoop",
        name: "Snoop Lion",
        phone: "02 975 1024",
        email: "snoopy@email.com",
      },
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
