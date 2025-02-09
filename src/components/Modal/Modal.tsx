
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loader from './../Looader/Loader';
import { CharacterProps } from '../../types/character';
import { PlanetResponse } from '../../types/planetResponse';
import './Modal.css';

interface ModalProps {
    user: CharacterProps | null;
    onClose: () => void;
}
const prefix = 'planets/';
const Modal: React.FC<ModalProps> = ({ user, onClose }) => {
       const { data, loading, error } = useFetch<PlanetResponse>(prefix, `/${user?.homeworld?.split('/planets/')[1]}`);

    if (!user) return null;
    if (loading) return <div><Loader /></div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>{user?.name}</h2>
                <h3><span>Height:</span> {user?.height}</h3>
                <h3><span>Mass:</span> {user?.mass}</h3>
                <h3><span>Birth year:</span> {user?.birth_year}</h3>
                <h3><span>The number of films:</span> {user?.films?.length}</h3>
                {loading? (<div><Loader /></div>):null}
                <h3><span>Home world name:</span> {data?.name}</h3>
                <h3><span>Home world climate:</span> {data?.climate}</h3>
                <h3><span>Home world terrain:</span> {data?.terrain}</h3>
                <h3><span>Home world population:</span> {data?.population}</h3>
            </div>
        </div>
    );
};

export default Modal;