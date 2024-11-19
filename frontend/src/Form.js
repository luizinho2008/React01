import "./Form.css";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const checkForm = {
//     nome: false,
//     nomeCientifico: false,
//     descricao: false,
//     latitude: false,
//     longitude: false
// };

const formSchema = z.object({
  nome: z
    .string({
      message: "O nome deve ser uma String",
    })
    .min(1, {
      message: "O nome deve ter ao menos 1 caracter",
    })
    .max(50, {
      message: "O nome não pode exceder 50 caracteres",
    }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  function onSubmit(formData) {
    try {
      const data = formSchema.parse(formData);
      console.log(data);
    } catch (error) {
      console.error("Erro");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{watch("nome")}</p>
      <input
        type="text"
        placeholder="Nome"
        {...register("nome", {
          required: true,
        })}
      />
      {errors.nome && <span>{errors.nome.message}</span>}
      <input
        type="text"
        placeholder="Nome Cientifico"
        {...register("nomeCientifico", {
          required: true,
        })}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
