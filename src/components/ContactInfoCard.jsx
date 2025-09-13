import React from 'react';

function ContactInfoCard({ title, content, buttonText, buttonLink }) {
    return (
        <div className="max-w-full rounded-lg overflow-hidden shadow-lg bg-white p-6 border-l-4 border-blue-500 mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-3">{title}</h3>
            <div className="text-gray-700 leading-relaxed text-lg">
                {content}
            </div>
            {buttonLink && (
                <div className="mt-4">
                    <a
                        href={buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                    >
                        {buttonText}
                    </a>
                </div>
            )}
        </div>
    );
}

export default ContactInfoCard;