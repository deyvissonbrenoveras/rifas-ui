import * as Yup from "yup";

export const createAccountValidationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Máximo de 50 caracteres permitidos")
    .required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("A descrição é obrigatória"),
  password: Yup.string()
    .min(8, "Sua senha deve possuir pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas não conferem"
  ),
});
