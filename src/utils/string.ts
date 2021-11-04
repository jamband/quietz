export const generateCode = (length: number) => {
  return [...Array(length)]
    .map(() => {
      return Math.floor(Math.random() * Math.floor(10)).toString();
    })
    .join("");
};

export const generateContents = (characters: string[]) => {
  return [...Array(10)].map(() => {
    return characters[
      Math.floor(Math.random() * Math.floor(characters.length))
    ];
  });
};
