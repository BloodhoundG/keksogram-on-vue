<script setup>

const props = defineProps({
  alt: String,
  comments: Array,
  likes: Number,
  url: String,
});
</script>

<template>
  <a class="picture" href="#">
    <img :alt="alt" :src="url" class="picture__img" height="182" width="182" />
    <p class="picture__info">
      <span class="picture__comments">{{ comments.length }}</span>
      <span class="picture__likes">{{ likes }}</span>
    </p>
  </a>
</template>

<style scoped>
.picture {
  position: relative;
  line-height: 0;
}

.picture__img {
  max-width: auto;
  width: 100%;
  height: auto;
}

.picture__info {
  display: none;

  margin: 0;
  padding: 15px;
  position: absolute;
  bottom: 10px;
  left: 50%;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.picture:hover .picture__info,
.picture:focus .picture__info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.picture__comments,
.picture__likes {
  padding-left: 30px;
  position: relative;

  font-family: "Open Sans", "Arial", sans-serif;
  font-weight: 400;
  color: #ffffff;
}

.picture__comments {
  margin-right: 10px;
}

.picture__comments::before,
.picture__likes::before {
  content: "";
  position: absolute;
  left: 5px;
  top: -7px;

  background-image: url("/img/sprite.png");
  background-repeat: no-repeat;
}

.picture__comments::before {
  width: 20px;
  height: 16px;

  background-position: -5px -5px;
}

.picture__likes::before {
  width: 20px;
  height: 16px;

  background-position: -5px -31px;
}
</style>