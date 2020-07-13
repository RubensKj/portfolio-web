import { Certification } from "../components/CertificationCard"

export const parseToCertification = (data: Certification): FormData => {
  let formData = new FormData();

  formData.append("title", data.title);
  formData.append("imageFile", data.image);
  parseString("description", data.description, formData);
  formData.append("certificationUrl", data.certificationUrl);

  return formData;
}

const parseString = (name: string, text: string | undefined, formData: FormData) => {
  if (!text) {
    return formData.append(name, '');
  }

  return formData.append(name, text);
}