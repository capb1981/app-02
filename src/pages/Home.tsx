import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import { Breadcrumb } from "./Breadcrumb";

export const Home = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">

            {/* Menu de Navegação */}
            <Menu />

            {/* Breadcrumb */}
            <Breadcrumb />

            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Bem-vindo à Nossa Loja</h1>
                <p className="text-gray-600 mb-6">
                    Encontre os melhores produtos com os melhores preços!
                </p>
                <Link
                    to="/produtos"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Ver Produtos
                </Link>
            </div>
        </div>
    );
}
