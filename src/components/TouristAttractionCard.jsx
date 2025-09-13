import React from 'react';

function TouristAttractionCard({ title, description, address, imageUrl, mapCoords }) {
    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg bg-white border border-gray-200 mb-6">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl text-indigo-700 mb-2">{title}</h2>
                <p className="text-gray-700 mb-2">{description}</p>
                <p className="text-sm text-gray-500"><strong>Address:</strong> {address}</p>
            </div>
            <div className="px-6 pb-4 flex gap-2 flex-wrap">
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapCoords}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
                    Get Directions
                </a>
            </div>
            <div className="px-6 pb-6">
                <iframe
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps?q=${mapCoords}&hl=en&z=15&output=embed`}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${title}`}
                ></iframe>
            </div>
        </div>
    );
}

export default TouristAttractionCard;