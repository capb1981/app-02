import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

const formSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    sobrenome: z.string().min(3, "O sobrenome deve ter pelo menos 3 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export const FormPage = () => {
    const { setData } = useFormContext();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        setData(data);
        navigate("/result"); // Redireciona para a página de resultado
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Formulário</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="block">Nome:</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                <div className="mb-3">
                    <label className="block">Sobrenome:</label>
                    <input
                        type="text"
                        {...register("sobrenome")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                <div className="mb-3">
                    <label className="block">E-mail:</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="border p-2 w-full rounded"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
