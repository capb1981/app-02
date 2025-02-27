import { useParams, Link } from "react-router-dom";
import { produtos } from "../components/produtos";
import { Menu } from "./Menu";
import { Breadcrumb } from "./Breadcrumb";

export const ProdutoPorCategoria = () => {
    const { categoria } = useParams();

    // Filtra os produtos pela categoria selecionada
    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);

    return (
        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
            {/* Menu de Navegação */}
            <Menu />

            {/* Breadcrumb */}
            <Breadcrumb />

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Produtos da Categoria: {categoria}</h2>

            {/* Lista de Produtos Filtrados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {produtosFiltrados.length > 0 ? (
                    produtosFiltrados.map((produto) => (
                        <div
                            key={produto.id}
                            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
                        >
                            <Link
                                to={`/produtos/${produto.categoria}/${produto.id}`}
                                className="flex flex-col items-center h-full"
                            >
                                <img
                                    src={produto.img}
                                    alt={produto.nome}
                                    className="w-32 h-32 object-cover rounded-xl mb-3"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-900">
                                    {produto.nome}
                                </h3>
                                <p className="text-green-600 font-bold text-md mt-4 mb-4">
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(produto.preco)}
                                </p>
                                <div className="flex-grow"></div>
                                <span className="text-xs bg-blue-500 text-white text-center px-2 py-1 rounded-sm mt-2 w-full">
                                    {produto.categoria}
                                </span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
                )}
            </div>

            {/* Botão para voltar à lista completa */}
            <div className="mt-6">
                <Link
                    to="/produtos"
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
                >
                    ← Voltar para Todos os Produtos
                </Link>
            </div>
            <div className="min-h-[300px]"></div>
        </div>
    );
};
