import * as yup from "yup";

export const SignInSchema = yup.object({
    email : yup.string().email().required("enter your email"),
    password : yup.string().required("enter your password")
})