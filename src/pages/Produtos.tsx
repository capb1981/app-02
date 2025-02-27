import { Link } from "react-router-dom";
import { Produto, produtos } from "../components/produtos";
import { Menu } from "./Menu";
import { Breadcrumb } from "./Breadcrumb";

export const Produtos = () => {

    const ordenarProdutos = (produtos: Produto[]) => {
        return produtos.sort((a, b) => a.nome.localeCompare(b.nome));
    };

    const produtosOrdenados = ordenarProdutos(produtos);

    return (

        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">

            {/* Menu de Navegação */}
            <Menu />

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Lista de Produtos */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Lista de Produtos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {produtosOrdenados.map((produto) => (
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

                                {/* Empurra a categoria para o final */}
                                <div className="flex-grow"></div>

                                <span className="text-xs bg-blue-500 text-white text-center px-2 py-1 rounded-sm mt-2 w-full">
                                    {produto.categoria}
                                </span>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );

}
