import * as yup from "yup"; // for everything

export default yup.object().shape({
  title: yup
    .string()
    .min(4)
    .required(),
  description: yup
    .string()
    .min(10)
    .required(),
  thumbnail: yup
    .mixed()
    .required("Thumbnail is not provided or in wrong format")
    .test(value => (value.type && value.name) || value.url),
  images: yup.array().required(),
  tags: yup
    .array()
    .of(yup.string())
    .required(),
  category: yup.string().required()
});
