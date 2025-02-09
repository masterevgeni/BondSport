import { useGlobalContext } from '../../context/Context.global';
import { CharacterProps } from '../../types/character';
import {LikeBTNProps} from '../../types/likeBTN';
import './LikeBTN.css';

const LikeBTN: React.FC<LikeBTNProps> = ({ character }) => {

    const { favoritePeople, updatePeople } = useGlobalContext();

    const onLike = (character: CharacterProps) => {
        if (!favoritePeople.find((person: CharacterProps) => person.name === character.name)) {
            updatePeople([...favoritePeople, character]);
        } else {
            updatePeople(favoritePeople.filter((person: CharacterProps) => person.name !== character.name));
        }
    };

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onLike(character);
            }}
            className={`like-button ${favoritePeople.find((person: CharacterProps) => person.name === character.name) !== undefined ? 'liked' : ''}`}
        >
            {favoritePeople.find((person: CharacterProps) => person.name === character.name) !== undefined ? '❤️' : '🤍'}
        </button>
    )
}
export default LikeBTN;