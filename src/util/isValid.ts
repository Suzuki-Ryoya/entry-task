export const isValid = (s: string) => {
  const array: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      array.push(s[i]);
    }

    const arrLength = array.length;

    if (s[i] === ")" && array[arrLength - 1] === "(") {
      array.pop();
    } else if (s[i] === "}" && array[arrLength - 1] === "{") {
      array.pop();
    } else if (s[i] === "]" && array[arrLength - 1] === "[") {
      array.pop();
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      return false;
    }
  }

  return array.length === 0;
};
