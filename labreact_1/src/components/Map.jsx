
import { useState } from 'react';
import Region from './Region';
import SelectedRegion from './SelectedRegion';
import './Map.css';

const Map = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);


    const regions = [
        { name: 'Київ', x: 339, y: 144, width: 66, height: 55 }, // Координати для Києва
        { name: 'Львів', x: 47, y: 166, width: 66, height: 55 }, // Координати для Львова
        { name: 'Харків', x: 597, y: 182, width: 77, height: 66 }, // Координати для Харкова
        { name: 'Херсон', x: 489, y: 389, width: 66, height: 55 },
        { name: 'Житомир', x: 257, y: 128, width: 66, height: 55 },
    ];


    const handleRegionClick = (name) => {
        setSelectedRegion(name);
    };

    return (
        <div className="map-container">
            <div className="map">
                <svg width="800" height="600">
                    {/* Фон карти України */}
                    <image href="/src/assets/ukraine-map.jpg" x="0" y="0" width="800" height="600" />

                    {/* Додавання регіонів */}
                    {regions.map((region) => (
                        <Region
                            key={region.name}
                            name={region.name}
                            x={region.x}
                            y={region.y}
                            width={region.width}
                            height={region.height}
                            onClick={handleRegionClick}
                        />
                    ))}
                </svg>
            </div>
            {selectedRegion && <SelectedRegion region={selectedRegion} />}
        </div>
    );
};

export default Map;
