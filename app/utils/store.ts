const STORAGE_NAME = "movies";

export const storage = <T, R>(data?: T | T[]): R | undefined => {
  const dataRaw = localStorage.getItem(STORAGE_NAME);
  const parsedData = dataRaw != null ? JSON.parse(dataRaw) : null;

  if (data) {
    localStorage.setItem(
      STORAGE_NAME,
      !!parsedData
        ? JSON.stringify([data, ...parsedData])
        : JSON.stringify([data])
    );
    return;
  }

  return parsedData;
};
