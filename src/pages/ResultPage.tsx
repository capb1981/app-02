import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export const ResultPage = () => {
    const { data } = useFormContext();
    const navigate = useNavigate();

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Dados Recebidos</h2>
            <p><strong>Nome:</strong> {data.name}</p>
            <p><strong>Sobrenome:</strong> {data.sobrenome}</p>
            <p><strong>E-mail:</strong> {data.email}</p>

            <button
                className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
                onClick={() => navigate("/")}
            >
                Voltar
            </button>
        </div>
    );
};
