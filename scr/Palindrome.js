
const isPalindrome = (str) => {
  if ((typeof str !== 'string') && (typeof str !== 'number')) return ('The data is incorrect');

  str = String(str).toLowerCase();
  str = str.replace(/\s/g, '');

  if (str.length === 0) return ('Введите данные');
  if (str.length === 1) return "Да, это палиндром";

  const result = (count) => {
    if (count.length < 2) {
      return "Да, это палиндром";
    }
    else if (count[0] !== count[count.length - 1]) {
      return "Нет, это не палиндром";
    }

    return result(count.slice(1, -1));

  };
  return result(str);
};
