import React, { useContext, useEffect } from "react";
import { EmpruntContext } from "../context/EmpruntContext";
import fetchApi from "../services/api";
import { Link } from "react-router-dom";
import { BiLoader } from "react-icons/bi";

const ListLivre = () => {
    const { disponibles, addEmprunt } = useContext(EmpruntContext);


    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Liste des Livres Disponibles : {disponibles.length}</h1>
            <h1 className="text-md font-bold mb-4">List Livres Emprunter:<Link to="/livres" className="text-blue-500">(click ici)</Link></h1>
            <div className="flex flex-wrap gap-4 items justify-center w-full">
                {disponibles.map((livre) => (
                    <div key={livre.id} className="max-w-sm basis-1/2 overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg">
                        <div className="rounded-lg bg-white p-6">
                            <h2 className="mb-4 text-2xl font-bold text-gray-800">
                                {livre.titre}
                            </h2>
                            <div className="mb-6 space-y-2">
                                <p className="text-lg text-gray-600">
                                    <span className="font-medium text-gray-800">Auteur:</span> {livre.auteur}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-800">Status:</span>
                                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 ring-1 ring-inset ring-green-600/20">
                                        Disponible
                                    </span>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <button onClick={() => addEmprunt(livre)} className="flex-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 font-bold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                    Emprunter
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {disponibles.length === 0 && 
                    <div className="w-full h-screen flex items-center justify-center">
                            <BiLoader className="animate-spin" size={50}/>
                    </div>
                }
            </div>
        </div>
    );
};

export default ListLivre;
