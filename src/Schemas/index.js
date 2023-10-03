import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(4, "Name should be minimum of 4 characters")
    .max(30, "Name can be maximum of 30 characters")
    .required("please enter your name"),
  email: Yup.string()
    .email("email must be a valid")
    .required("please enter your email"),
  contactPrimary: Yup.number()
    .min("10", "must be a valid number")
    // .max(15, "must be a valid number")
    .required("please enter contact number"),
  contactSecondary: Yup.number()
    .min(10, "must be a valid number"),
  age: Yup.number("must be a number")
    .required("please enter your age"),
  grade: Yup.number("must be a number")
    .required("please enter your grade of study"),
  gender: Yup.string("must be a male of female")
    .required("please enter your gender"),
  city: Yup.string()
    .required("please enter city"),
  password: Yup.string()
    .min(4, "password should minimum of 4 characters")
    .required("please enter password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password did not match")
    .required("please enter password again"),
});
