export const parseToCertification = (data: Map<string, (string | Blob)>): FormData => {
  let formData = new FormData();

  data.forEach((value, key) => {

    console.log(value, key)
    if (!value) {
      formData.append(key, 'rteuy');
    }

    formData.append(key, value);
  });

  return formData;
};