export const parseToCertification = (data: Map<string, (string | Blob)>): FormData => {
  const formData = new FormData();

  data.forEach((value, key) => {
    if (!value) {
      return;
    }

    formData.append(key, value);
  });

  return formData;
};