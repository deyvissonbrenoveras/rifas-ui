import * as Yup from "yup";

export const raffleValidationSchema = Yup.object().shape({
  title: Yup.string()
    .max(100, "Máximo de 100 caracteres permitidos")
    .required("O título é obrigatório"),
  description: Yup.string()
    .max(150, "Máximo de 150 caracteres permitidos")
    .required("A descrição é obrigatória"),
  quotaExpirationInDays: Yup.number()
    .positive("Insira um valor positivo")
    .required("O prazo de exiração da quota é obrigatório"),
  quotaPrice: Yup.number()
    .positive("Insira um valor positivo")
    .required("O preço da quota é obrigatório"),
  quotaQuantity: Yup.number()
    .positive("Insira um valor positivo")
    .required("A quantidade de quotas é obrigatória"),
  allowedQuotasPerPurchase: Yup.number()
    .positive("Insira um valor positivo")
    .required("A quantidade de quotas por compra é obrigatória"),
  categoryId: Yup.number()
    .positive("Insira um valor positivo")
    .required("A categoria é obrigatória"),
});
