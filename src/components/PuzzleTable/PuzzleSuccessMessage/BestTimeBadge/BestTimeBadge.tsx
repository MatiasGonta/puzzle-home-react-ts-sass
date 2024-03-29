import { useState } from 'react';

const BestTimeBadge = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleBadgeOnClick = () => setIsFlipped(!isFlipped);

    return (
        <div className={`badge ${isFlipped && 'badge--flipped'}`} onClick={handleBadgeOnClick}>
            <div className="badge__front">
                <svg className="badge__front__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 440 440">
                    <circle className="outer" fill="#F9D535" stroke="#fff" strokeWidth="8" strokeLinecap="round" cx="180" cy="180" r="157" z-index="10" cursor="pointer" />
                    <circle className="inner" fill="#DFB828" stroke="#fff" strokeWidth="8" cx="180" cy="180" r="108.3" />
                    <path className="inline" d="M89.4 276.7c-26-24.2-42.2-58.8-42.2-97.1 0-22.6 5.6-43.8 15.5-62.4m234.7.1c9.9 18.6 15.4 39.7 15.4 62.2 0 38.3-16.2 72.8-42.1 97" stroke="#CAA61F" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <g className="star" cursor="pointer">
                        <path fill="#F9D535" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M180 107.8l16.9 52.1h54.8l-44.3 32.2 16.9 52.1-44.3-32.2-44.3 32.2 16.9-52.1-44.3-32.2h54.8z" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="180" cy="107.8" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="223.7" cy="244.2" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="135.5" cy="244.2" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="108.3" cy="160.4" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="251.7" cy="160.4" r="4.4" />
                    </g>
                </svg>
            </div>
            <div className="badge__back">
                <svg className="badge__back__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-40 -40 440 440">
                    <circle className="outer" fill="#F9D535" stroke="#fff" strokeWidth="8" strokeLinecap="round" cx="180" cy="180" r="157" z-index="10" cursor="pointer" />
                    <circle className="inner" fill="#DFB828" stroke="#fff" strokeWidth="8" cx="180" cy="180" r="108.3" />
                    <path className="inline" d="M89.4 276.7c-26-24.2-42.2-58.8-42.2-97.1 0-22.6 5.6-43.8 15.5-62.4m234.7.1c9.9 18.6 15.4 39.7 15.4 62.2 0 38.3-16.2 72.8-42.1 97" stroke="#CAA61F" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <g className="star" cursor="pointer">
                        <path fill="#F9D535" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M180 107.8l16.9 52.1h54.8l-44.3 32.2 16.9 52.1-44.3-32.2-44.3 32.2 16.9-52.1-44.3-32.2h54.8z" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="180" cy="107.8" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="223.7" cy="244.2" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="135.5" cy="244.2" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="108.3" cy="160.4" r="4.4" />
                        <circle fill="#DFB828" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" cx="251.7" cy="160.4" r="4.4" />
                    </g>
                </svg>
                <span className="badge__back__text">¡New best time!</span>
            </div>
        </div>
    )
}

export default BestTimeBadge