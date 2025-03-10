/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
    nome: string;
    sobrenome: string;
    email: string;
}

interface FormContextType {
    data: FormData;
    setData: (data: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<FormData>({ nome: "", email: "", sobrenome: "" });

    return (
        <FormContext.Provider value={{ data, setData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext deve ser usado dentro de um FormProvider");
    }
    return context;
};
