export const formatDate = (date: string) => {
  const dateParsed = new Date(date);

  return `${dateParsed.getDate()}.${dateParsed.getMonth()}`;
};

export const getRandomElement = <T>(array: readonly T[]): T => array[Math.floor(Math.random() * array.length)];
