import { useParams, Link } from "react-router-dom";
import { produtos } from "../components/produtos";
import { Menu } from "./Menu";
import { Breadcrumb } from "./Breadcrumb";

export const ExibirProduto = () => {
    const { id } = useParams(); // Captura o ID da URL
    const produto = produtos.find((p) => p.id.toString() === id); // Busca o produto

    if (!produto) {
        return <p className="text-red-500 text-center mt-10">Produto não encontrado!</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
            {/* Menu de Navegação */}
            <Menu />

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Detalhes do Produto */}
            <div className="max-w-4xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg flex flex-col justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                    {/* Coluna da Esquerda - Imagem */}
                    <div className="flex justify-center items-center">
                        <img
                            src={produto.img}
                            alt={produto.nome}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto p-2 object-cover rounded-xl"
                        />
                    </div>
                    {/* Coluna da Direita - Informações */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">
                            {produto.nome}
                        </h2>
                        <p className="text-green-600 font-bold text-xl mt-2 text-center md:text-left">
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(produto.preco)}
                        </p>
                        <span className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg mt-2 mx-auto md:mx-0">
                            Categoria: {produto.categoria}
                        </span>
                        {/* Lista de detalhes */}
                        <div className="mt-4 text-left md:text-left">
                            <h3 className="text-lg font-semibold mb-2">Detalhes do Produto:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {produto.detalhes.map((detalhe, index) => (
                                    <li key={index} className="text-sm">{detalhe}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Botão Voltar */}
                        <div className="mt-6 flex justify-center md:justify-start">
                            <Link
                                to="/produtos"
                                className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
                            >
                                ← Voltar para Produtos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[200px]"></div>
        </div>
    );
};