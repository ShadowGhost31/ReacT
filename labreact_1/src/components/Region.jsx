
import 'react';

// eslint-disable-next-line react/prop-types
const Region = ({ name, x, y, width, height, onClick }) => {
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill="rgba(255, 0, 0, 0.5)" // Напівпрозорі прямокутники
            stroke="black"
            strokeWidth="2"
            onClick={() => onClick(name)}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default Region;
