import { commentMessages, userNames } from "./data.js";
import {
  createIdGenerator,
  getRandomArrayItem,
  getRandomInteger,
} from "./util.js";

const AVATAR_COUNT = 6;

const generateIdComment = createIdGenerator();

/**
 * Функция возвращает массив комментариев из сгенерированных объектов
 * @returns {[ { name: string, id: string, avatar: string, message: string }, ]}
 */
export const createComments = () => {
  const arrayComments = [];

  for (let i = 1; i <= getRandomInteger(9, 19); i++) {
    arrayComments.push({
      id: `${generateIdComment()}`,
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}`,
      message: `${getRandomArrayItem(commentMessages)}`,
      name: `${getRandomArrayItem(userNames)}`,
    });
  }

  return arrayComments;
};
