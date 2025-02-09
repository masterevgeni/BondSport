import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import LikeBTN from '../LikeBTN/LikeBTN';
import { CharacterProps } from '../../types/character';
import { ViewCardProps } from '../../types/viewCard';
import './ViewCard.css';

const ViewCard: React.FC<ViewCardProps> = ({ character, index }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<CharacterProps | null>(null);

    const handleCardClick = (user: CharacterProps) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <>
            <div className="user-card" key={index} onClick={() => handleCardClick(character)}>
                <img src={'https://fastly.picsum.photos/id/529/200/300.jpg?hmac=WqdWbOIAJ1H2q4r92Fc4KXM--xvRadidXmV5P2R1rDg'} alt={'s'} />
                <h2>{character?.name?.substring(0,10)}</h2>
               <LikeBTN character={character} />
            </div>
            {isModalOpen && <Modal user={selectedUser} onClose={closeModal} />}
        </>
    )
}

export default ViewCard;