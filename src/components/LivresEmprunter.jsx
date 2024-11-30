import React, { useContext, useEffect } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';
import fetchApi from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

function LivresEmprunter() {
    const { emprunt, returnerLivre } = useContext(EmpruntContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (emprunt.length === 0) {
            navigate('/');
        }
    }, [emprunt, navigate]);

    return (
        <section className="w-full flex flex-col p-3 items-center gap-3 justify-center flex-wrap">
            <div className="w-full h-10 flex items-center gap-5 px-8">
                <h1 className="text-2xl font-bold text-gray-800">
                    Livres empruntés : {emprunt?.length || 0} Livre(s)
                </h1>
                <h1 className="text-xl font-bold text-gray-800">
                    Livres Disponibles : <Link to="/" className="text-blue-500">Retour</Link>
                </h1>

            </div>

            <div className="w-full h-full flex items-center justify-center gap-3 flex-wrap">
                {emprunt && emprunt.length > 0 ? (
                    emprunt.map(({ id, titre, auteur, disponible }) => (
                        <div
                            key={id}
                            className="max-w-sm basis-1/2 overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg"
                        >
                            <div className="rounded-lg bg-white p-6">
                                <h2 className="mb-4 text-2xl font-bold text-gray-800">{titre}</h2>
                                <div className="mb-6 space-y-2">
                                    <p className="text-lg text-gray-600">
                                        <span className="font-medium text-gray-800">Auteur:</span> {auteur}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-gray-800">Status:</span>
                                        <span
                                            className={
                                                disponible
                                                    ? 'inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 ring-1 ring-inset ring-green-600/20'
                                                    : 'inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 ring-1 ring-inset ring-red-600/20'
                                            }
                                        >
                                            {disponible ? 'Disponible' : 'Emprunté'}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() =>
                                            returnerLivre(id)
                                        }
                                        className="flex-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 font-bold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                        Rendre
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-lg text-gray-600">Aucun livre emprunté.</p>
                )}
            </div>
        </section >
    );
}

export default LivresEmprunter;
