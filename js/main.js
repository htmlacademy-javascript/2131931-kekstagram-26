// Получение случайного числа из диапазона.
// function getRandomInt (min, max) {
//   min = Math.ceil(Math.abs(min));
//   max = Math.floor(Math.abs(max));
//   if (min <= max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   } return Math.floor(Math.random() * (min - max)) + max;
// }
// getRandomInt(10, 100);


// // Проверка максимальной длины комментария.
// function checkImgComment (imgComment, maxLengthImgComment) {
//   return imgComment.length <= maxLengthImgComment;
// }
// checkImgComment('Проверяемая строка', 140);

const usersName = [
  'Наталья',
  'Денис',
  'Мария',
  'Владимир',
  'Ксения',
  'Александр',
  'Лидия',
  'Константин',
  'Гомора',
  'Питер',
  'Ракета',
  'Грут',
  'Присцилла',
  'Геральт',
  'Лютик',
  'Борода',
  'Ивасик',
  'Юлия',
  'Настя',
  'Евгений',
  'Григорий',
  'Виктория',
  'Валентин',
  'Нео',
  'Тринити',
];

//  варианты комментариев
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const maxLengthImgComment = 140;

// Проверка максимальной длины комментария.
const checkLengthImgComment = (imgComment) => imgComment.length <= maxLengthImgComment;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// Получаю массив уникальных случайных чисел
function getRandomUniqNumber (howManyNumber, min, max) {
  const randomNumber = [];

  for(let i = 0; i < howManyNumber; i++) {
    let isExist = null;
    let genNum = getRandomPositiveInteger(min, max);
    do {
      isExist = randomNumber.indexOf(genNum);
      if(isExist >= 0) {
        genNum = getRandomPositiveInteger(min, max);
      } else {
        randomNumber.push(genNum);
        isExist = -2;
      }
    }

    while(isExist > -1);
  }

  return randomNumber;
}

const arrUniqNumbersForComment = getRandomUniqNumber(50, 1, 50);

const createUserComment = () => {
  const name = null;
  const id = null;
  const avatar = null;
  const message = null;

  return {
    id,
    name,
    avatar,
    message,
  };
};

const numbersOfComment = 50;
const comments = Array.from({length: numbersOfComment}, createUserComment);


for(let i = 0; i <= arrUniqNumbersForComment.length - 1; i++ ) {
  comments[i].id = arrUniqNumbersForComment[i];
  comments[i].name = usersName[getRandomPositiveInteger(0, usersName.length - 1)];
  comments[i].avatar = `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`;

  const imgComment = messages[getRandomPositiveInteger(0, messages.length - 1)];

  if (checkLengthImgComment(imgComment, maxLengthImgComment)) {
    comments[i].message = messages[i];
  }
}

const numbersOfDescription = 25;
const arrUniqRandomNumberForDescription = getRandomUniqNumber(25, 1, 25);

const createUserPhotoDescription = () => {
  const id = null;
  const url = null;
  const description = null;
  const likes = null;

  return {
    id,
    url,
    description,
    likes,
    comments,
  };
};

const arrDescriotionsPhoto = Array.from({length: numbersOfDescription}, createUserPhotoDescription);


for(let i = 0; i <= arrUniqRandomNumberForDescription.length - 1; i++) {
  arrDescriotionsPhoto[i].id = arrUniqRandomNumberForDescription[i];
  arrDescriotionsPhoto[i].url = `photos/${arrUniqRandomNumberForDescription[i]}.jpg`;
  arrDescriotionsPhoto[i].description = 'Lorem ipsum и т.д.';
  arrDescriotionsPhoto[i].likes = getRandomPositiveInteger(15, 200);
//arrDescriotionsPhoto[i].comments.length = getRandomPositiveInteger(1, 10)
//не работает, пока не поминаю почему
}

