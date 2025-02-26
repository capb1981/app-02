import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormPage } from "./pages/FormPage";
import { ResultPage } from "./pages/ResultPage";
import { FormProvider } from "./context/FormContext";

export const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};
