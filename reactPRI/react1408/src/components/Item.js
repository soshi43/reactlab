import React, { useState } from 'react';
import './Item.css';

const Item = () => {
    const [userAnswers, setUserAnswers] = useState({});

    const riddles = [
        {
            id: 1,
            description: "Какое средство использовать в лесу, на рыбалке от комаров, мошки и прочих гнусов?",
            option1: 'Парфюм',
            option2: 'Электро-Ракетка',
            option3: 'Спрей от Насекомых',
            option4: 'Не помню',
            correct: 2,
        },
        {
            id: 2,
            description: "Как вести себя при встрече с больной бешенством лисой?",
            option1: 'Дать дёру',
            option2: 'Молча стоять и смотреть на неё',
            option3: 'Обходить её за Километр',
            option4: 'Схватить дрын, и как следует накернить эту дичь',
            correct: 4,
        },
        {
            id: 3,
            description: 'Как защититься от нападения настоящего оборотня в лесу?',
            option1: 'Взять топор, и движением снизу вверх расопороть брюхо',
            option2: 'Накернить его спыра',
            option3: 'Осадить дрыном',
            option4: 'Помолиться',
            correct: 1,
        },
        {
            id: 4,
            description: 'Самая необходимая вещь для стычки с животиной...',
            option1: 'Мощная Рогатка',
            option2: 'Шнековое Сверло (Падла-Бур)',
            option3: 'Нунчаки',
            option4: 'Бензопила',
            correct: 2,
        },
    ];

    const handleAnswer = (riddleId, selectedOption) => {
        setUserAnswers(prevState => ({
            ...prevState,
            [riddleId]: selectedOption
        }));
    };

    return (
        <div className="item-container">
            {riddles.map((riddle) => (
                <div className="riddle-container" key={riddle.id}>
                    <h3 className="riddle-description">{riddle.description}</h3>
                    <ul className="options-list">
                        <li className="option" onClick={() => handleAnswer(riddle.id, 1)}>{riddle.option1}</li>
                        <li className="option" onClick={() => handleAnswer(riddle.id, 2)}>{riddle.option2}</li>
                        <li className="option" onClick={() => handleAnswer(riddle.id, 3)}>{riddle.option3}</li>
                        <li className="option" onClick={() => handleAnswer(riddle.id, 4)}>{riddle.option4}</li>
                    </ul>
                    {userAnswers[riddle.id] && (userAnswers[riddle.id] === riddle.correct ? (
                        <p className="ans-c">Успех, вы уработали!</p>
                    ) : (
                        <p className="ans-i">Ошибка, вас уработали</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Item;