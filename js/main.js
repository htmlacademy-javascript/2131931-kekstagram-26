// Получение случайного числа из диапазона.
function getRandomInt (min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));
  if (min <= max) {
    return Math.floor(Math.random() * (max - min)) + min;
  } return Math.floor(Math.random() * (min - max)) + max;
}
getRandomInt(10, 100);


// Проверка максимальной длины комментария.
function checkImgComment (imgComment, maxLengthImgComment) {
  return imgComment.length <= maxLengthImgComment;
}
checkImgComment('Проверяемая строка', 140);
