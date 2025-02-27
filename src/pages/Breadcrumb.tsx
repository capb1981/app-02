import { Link, useParams } from "react-router-dom";
import { produtos } from "../components/produtos";

export const Breadcrumb = () => {

    const { id } = useParams(); // Captura o ID da URL

    const produto = produtos.find((p) => p.id.toString() === id); // Busca o produto
    if (!produto) {
        return null
    }

    // Define os links do Breadcrumb
    const breadcrumbLinks = [
        { href: "/", label: "Home" },
        { href: "/produtos", label: "Produtos" },
        { href: `/produtos/${produto.categoria}`, label: produto.categoria } // Último item sem href (página atual)
    ];

    return (
        <nav className="flex text-sm font-medium text-gray-600 mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                {breadcrumbLinks.map((link, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index > 0 && (
                            <svg
                                className="w-4 h-4 mx-1 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        {link.href ? (
                            <Link
                                to={link.href}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900">{link.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}