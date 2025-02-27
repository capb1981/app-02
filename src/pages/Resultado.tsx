import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";
import { Breadcrumb } from "./Breadcrumb";

export const Resultado = () => {
    const { data } = useFormContext();
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">

            {/* Menu de Navegação */}
            <Menu />

            {/* Breadcrumb */}
            <Breadcrumb />

            <div className="p-6 text-center">
                <div className="max-w-md mx-auto p-5 border rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Dados Recebidos</h2>
                    <p><strong>Nome:</strong> {data.nome}</p>
                    <p><strong>Sobrenome:</strong> {data.sobrenome}</p>
                    <p><strong>E-mail:</strong> {data.email}</p>

                    <button
                        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
                        onClick={() => navigate("/contato")}
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    );
};
