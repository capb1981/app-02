import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";
import { Menu } from "./Menu";
import { Breadcrumb } from "./Breadcrumb";

const formSchema = z.object({
    nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    sobrenome: z.string().min(3, "O sobrenome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
});

type FormData = z.infer<typeof formSchema>;

export const Formulario = () => {
    const { setData } = useFormContext();
    const navegacao = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        setData(data);
        navegacao("/resultado");
    };

    return (

        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">

            {/* Menu de Navegação */}
            <Menu />

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Conteúdo da Página Inicial */}
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Entrar em contato com nossa equipe.</h1>
                <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
                    <h2 className="text-xl text-left font-bold mb-4">Formulário</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label className="block text-left">Nome:</label>
                            <input
                                type="text"
                                {...register("nome")}
                                className="border p-2 w-full rounded"
                            />
                            {errors.nome && (
                                <p className="text-red-500 text-sm">{errors.nome.message}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="block text-left">Sobrenome:</label>
                            <input
                                type="text"
                                {...register("sobrenome")}
                                className="border p-2 w-full rounded"
                            />
                            {errors.sobrenome && (
                                <p className="text-red-500 text-sm">{errors.sobrenome.message}</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="block text-left">E-mail:</label>
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
            </div>
            <div className="min-h-[200px]"></div>
        </div>

    );
};
