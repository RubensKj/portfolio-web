export const parseToCertification = (data: Map<string, (string | Blob)>): FormData => {
  const formData = new FormData();

  data.forEach((value, key) => {
    if (!value) {
      return;
    }

    if (value instanceof FileList) {
      for (var i = 0; i < value.length; i++) {
        formData.append(key, value[i]);
      }
      return;
    }

    formData.append(key, value);
  });

  return formData;
};