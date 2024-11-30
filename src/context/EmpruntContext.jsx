import { createContext, useState, useEffect } from "react";
import fetchApi from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const EmpruntContext = createContext();

const EmpruntProvider = ({ children }) => {
    const [emprunt, setEmprunt] = useState([]);
    const [disponibles, setDisponibles] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetchApi();
                setDisponibles(res.data.filter((book) => book.disponible));
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    const addEmprunt = (livre) => {
        if (livre.disponible) {
            const updatedLivre = { ...livre, disponible: false };
            setEmprunt([...emprunt, updatedLivre]);
            setDisponibles(disponibles.filter((book) => book.id !== livre.id));
            toast.success("Livre a été emprunter.");
        }
    };

    const returnerLivre = (id) => {
        const returnedBook = emprunt.find((book) => book.id === id);

        if (returnedBook) {
            const updatedLivre = { ...returnedBook, disponible: true };
            setDisponibles([...disponibles, updatedLivre]);
            setEmprunt(emprunt.filter((book) => book.id !== id));
            toast.success("Livre a retourner.");
            // window.location.href = "/";
        } else {
            toast.error("Livre introuvable.");
        }
    };



    return (
        <EmpruntContext.Provider
            value={{ emprunt, disponibles, addEmprunt, returnerLivre }}
        >
            {children}
        </EmpruntContext.Provider>
    );
};

export default EmpruntProvider;
