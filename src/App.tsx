import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Formulario } from "./pages/Formulario";
import { Resultado } from "./pages/Resultado";
import { FormProvider } from "./context/FormContext";
import { ExibirProduto } from "./pages/ExibirProduto";
import { Produtos } from "./pages/Produtos";
import { ProdutoPorCategoria } from "./pages/ProdutoPorCategoria";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/produtos">
            <Route index element={<Produtos />} />
            <Route path=":categoria/:id" element={<ExibirProduto />} />
            <Route path=":categoria" element={<ProdutoPorCategoria />} />
          </Route>
          <Route path="/contato" element={<Formulario />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};
