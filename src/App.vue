<script setup>
import { dataArray } from "./logics/createPhotoDescriptions.js";
import Card from "./components/Card.vue";
import ModalBigPicture from "./components/ModalBigPicture.vue";
import { ref } from "vue";

const hidden = ref(false);
const selectedPost = ref(null);

const showModalBigPicture = (post) => {
  hidden.value = true;
  selectedPost.value = post;
};

const closeModalBigPicture = () => {
  hidden.value = false;
};
</script>

<template>
  <!-- Фильтрация изображений от других пользователей -->
  <section class="img-filters img-filters--inactive container">
    <h2 class="img-filters__title visually-hidden">Фильтр фотографий</h2>
    <form
      action="index.html"
      autocomplete="off"
      class="img-filters__form"
      method="get"
    >
      <button
        id="filter-default"
        class="img-filters__button img-filters__button--active"
        type="button"
      >
        По умолчанию
      </button>
      <button id="filter-random" class="img-filters__button" type="button">
        Случайные
      </button>
      <button id="filter-discussed" class="img-filters__button" type="button">
        Обсуждаемые
      </button>
    </form>
  </section>

  <!-- Контейнер для изображений от других пользователей -->
  <section class="pictures container">
    <h2 class="pictures__title visually-hidden">
      Фотографии других пользователей
    </h2>

    <!-- Поле для загрузки нового изображения на сайт -->
    <section class="img-upload">
      <div class="img-upload__wrapper">
        <h2 class="img-upload__title visually-hidden">Загрузка фотографии</h2>
        <form
          id="upload-select-image"
          autocomplete="off"
          class="img-upload__form"
          enctype="multipart/form-data"
          method="post"
        >
          <!-- Изначальное состояние поля для загрузки изображения -->
          <fieldset class="img-upload__start">
            <input
              id="upload-file"
              class="img-upload__input visually-hidden"
              name="filename"
              required
              type="file"
            />
            <label
              class="img-upload__label img-upload__control"
              for="upload-file"
              >Загрузить</label
            >
          </fieldset>

          <!-- Форма редактирования изображения -->
          <div class="img-upload__overlay hidden">
            <div class="img-upload__wrapper">
              <div class="img-upload__preview-container">
                <!-- Изменение размера изображения -->
                <fieldset class="img-upload__scale scale">
                  <button
                    class="scale__control scale__control--smaller"
                    type="button"
                  >
                    Уменьшить
                  </button>
                  <input
                    class="scale__control scale__control--value"
                    name="scale"
                    readonly
                    title="Image Scale"
                    type="text"
                    value="55%"
                  />
                  <button
                    class="scale__control scale__control--bigger"
                    type="button"
                  >
                    Увеличить
                  </button>
                </fieldset>

                <!-- Предварительный просмотр изображения -->
                <div class="img-upload__preview">
                  <img
                    alt="Предварительный просмотр фотографии"
                    src="/img/upload-default-image.jpg"
                  />
                </div>

                <!-- Изменение глубины эффекта, накладываемого на изображение -->
                <fieldset class="img-upload__effect-level effect-level">
                  <input
                    class="effect-level__value"
                    name="effect-level"
                    step="any"
                    type="number"
                    value=""
                  />
                  <div class="effect-level__slider"></div>
                </fieldset>

                <!-- Кнопка для закрытия формы редактирования изображения -->
                <button
                  id="upload-cancel"
                  class="img-upload__cancel cancel"
                  type="reset"
                >
                  Закрыть
                </button>
              </div>

              <!-- Наложение эффекта на изображение -->
              <fieldset class="img-upload__effects effects">
                <ul class="effects__list">
                  <li class="effects__item">
                    <input
                      id="effect-none"
                      checked
                      class="effects__radio visually-hidden"
                      name="effect"
                      type="radio"
                      value="none"
                    />
                    <label class="effects__label" for="effect-none">
                      <span class="effects__preview effects__preview--none"
                        >Превью фото без эффекта</span
                      >
                      Оригинал
                    </label>
                  </li>
                  <li class="effects__item">
                    <input
                      id="effect-chrome"
                      class="effects__radio visually-hidden"
                      name="effect"
                      type="radio"
                      value="chrome"
                    />
                    <label class="effects__label" for="effect-chrome">
                      <span class="effects__preview effects__preview--chrome"
                        >Превью эффекта Хром</span
                      >
                      Хром
                    </label>
                  </li>
                  <li class="effects__item">
                    <input
                      id="effect-sepia"
                      class="effects__radio visually-hidden"
                      name="effect"
                      type="radio"
                      value="sepia"
                    />
                    <label class="effects__label" for="effect-sepia">
                      <span class="effects__preview effects__preview--sepia"
                        >Превью эффекта Сепия</span
                      >
                      Сепия
                    </label>
                  </li>
                  <li class="effects__item">
                    <input
                      id="effect-marvin"
                      class="effects__radio visually-hidden"
                      name="effect"
                      type="radio"
                      value="marvin"
                    />
                    <label class="effects__label" for="effect-marvin">
                      <span class="effects__preview effects__preview--marvin"
                        >Превью эффекта Марвин</span
                      >
                      Марвин
                    </label>
                  </li>
                  <li class="effects__item">
                    <input
                      id="effect-phobos"
                      class="effects__radio visually-hidden"
                      name="effect"
                      type="radio"
                      value="phobos"
                    />
                    <label class="effects__label" for="effect-phobos">
                      <span class="effects__preview effects__preview--phobos"
                        >Превью эффекта Фобос</span
                      >
                      Фобос
                    </label>
                  </li>
                  <li class="effects__item">
                    <input
                      id="effect-heat"
                      class="effects__radio visually-hidden"
                      name="effect"
                      type="radio"
                      value="heat"
                    />
                    <label class="effects__label" for="effect-heat">
                      <span class="effects__preview effects__preview--heat"
                        >Превью эффекта Зной</span
                      >
                      Зной
                    </label>
                  </li>
                </ul>
              </fieldset>

              <!-- Добавление хэш-тегов и комментария к изображению -->
              <fieldset class="img-upload__text text">
                <div class="img-upload__field-wrapper">
                  <input
                    class="text__hashtags"
                    name="hashtags"
                    placeholder="#ХэшТег"
                  />
                </div>
                <div class="img-upload__field-wrapper">
                  <textarea
                    class="text__description"
                    name="description"
                    placeholder="Ваш комментарий..."
                  ></textarea>
                </div>
              </fieldset>

              <!-- Кнопка для отправки данных на сервер -->
              <button
                id="upload-submit"
                class="img-upload__submit"
                type="submit"
              >
                Опубликовать
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <!-- Здесь будут изображения других пользователей -->

    <Card
      v-for="post in dataArray"
      :key="post.id"
      :alt="post.description"
      :comments="post.comments"
      :likes="post.likes"
      :url="post.url"
      @click="showModalBigPicture(post)"
    />
  </section>

  <!-- Полноэкранный показ изображения -->

  <ModalBigPicture
    v-if="hidden"
    :alt="selectedPost.description"
    :comments="selectedPost.comments"
    :likes="selectedPost.likes"
    :url="selectedPost.url"
    @closeModalBigPicture="closeModalBigPicture"
  />
</template>

<style lang="scss" scoped></style>
