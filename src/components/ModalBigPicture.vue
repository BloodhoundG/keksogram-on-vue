<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  alt: String,
  comments: Array,
  likes: Number,
  url: String,
});

const emits = defineEmits(["closeModalBigPicture"]);
const closeModal = () => {
  emits("closeModalBigPicture");
};

const onEscClose = (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  document.body.classList.add("modal-open");
  document.addEventListener("keydown", onEscClose);
});

onUnmounted(() => {
  document.body.classList.remove("modal-open");
  document.removeEventListener("keydown", onEscClose);
});
</script>

<template>
  <section class="big-picture overlay">
    <h2 class="big-picture__title visually-hidden">Просмотр фотографии</h2>
    <div class="big-picture__preview">
      <!-- Просмотр изображения -->
      <div class="big-picture__img">
        <img :alt="alt" :src="url" height="600" width="600" />
      </div>

      <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
      <div class="big-picture__social social">
        <div class="social__header">
          <img
            alt="Аватар автора фотографии"
            class="social__picture"
            height="35"
            src="/img/avatar-1.svg"
            width="35"
          />
          <p class="social__caption">{{ alt }}</p>
          <p class="social__likes">
            Нравится <span class="likes-count">{{ likes }}</span>
          </p>
        </div>

        <!-- Комментарии к изображению -->
        <div class="social__comment-count">
          5 из
          <span class="comments-count">{{ comments.length }}</span> комментариев
        </div>
        <ul class="social__comments">
          <li class="social__comment">
            <img
              alt="Аватар комментатора фотографии"
              class="social__picture"
              height="35"
              src="/img/avatar-4.svg"
              width="35"
            />
            <p class="social__text">
              Мега фото! Просто обалдеть. Как вам так удалось?
            </p>
          </li>
          <li class="social__comment">
            <img
              alt="Аватар комментатора фотографии"
              class="social__picture"
              height="35"
              src="/img/avatar-3.svg"
              width="35"
            />
            <p class="social__text">Да это фоташоп!!!!!!!!</p>
          </li>
        </ul>

        <!-- Кнопка для загрузки новой порции комментариев -->
        <button class="social__comments-loader comments-loader" type="button">
          Загрузить еще
        </button>

        <!-- Форма для отправки комментария -->
        <div class="social__footer">
          <img
            alt="Аватар комментатора фотографии"
            class="social__picture"
            height="35"
            src="/img/avatar-6.svg"
            width="35"
          />
          <input
            class="social__footer-text"
            placeholder="Ваш комментарий..."
            type="text"
          />
          <button class="social__footer-btn" name="button" type="button">
            Отправить
          </button>
        </div>
      </div>

      <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
      <button
        id="picture-cancel"
        class="big-picture__cancel cancel"
        type="reset"
        @click="closeModal"
      >
        Закрыть
      </button>
    </div>
  </section>
</template>

<style scoped></style>
