import { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className="bg-gray-800 text-white px-6 py-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Loja Virtual</h1>
                {/* Botão do Menu Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    ☰
                </button>
                {/* Links de Navegação */}
                <ul className={`md:flex space-x-6 ${menuAberto ? "block" : "hidden"} md:block`}>
                    <li><Link to="/" className="hover:text-gray-300">Início</Link></li>
                    <li><Link to="/produtos" className="hover:text-gray-300">Produtos</Link></li>
                    <li><Link to="/contato" className="hover:text-gray-300">Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}
