<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html">
        <img :src="article.aothor.username" />
      </a>
      <div class="info">
        <a href="" class="author">{{ article.author.username }}</a>
        <span class="date">{{ formatDate(article.createdAt) }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heeart"></i>
        {{ article.favoriteCount }}
      </button>
    </div>
    <router-link :to="`/article/${article.slug}`" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read More...</span>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["article"],
  methods: {
    formatDate(dateString) {
      return moment(dateString).format("MMMM,Do, YYYY");
    },
  },
};
</script>
