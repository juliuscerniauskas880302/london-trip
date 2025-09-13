import React from 'react';

function FlightInfoCard({ type, flight }) {
    return (
        <div className="max-w-full rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 border border-gray-200 mb-6">
            <h3 className="font-bold text-2xl mb-3 text-center">{type} Flight</h3>
            <div className="text-lg mb-2">
                <strong>Flight Code:</strong> {flight.code}
            </div>
            <div className="text-lg mb-4">
                <strong>Date:</strong> {flight.date}
            </div>

            <div className="flex justify-between items-center text-center border-t border-b border-indigo-300 py-4 mb-4">
                <div>
                    <p className="text-sm text-indigo-100">Departure</p>
                    <p className="font-bold text-xl">{flight.from.city} ({flight.from.airport})</p>
                    <p className="text-lg">{flight.from.departureLocal}</p>
                </div>
                <div>
                    <span className="text-3xl">✈️</span>
                </div>
                <div>
                    <p className="text-sm text-indigo-100">Arrival</p>
                    <p className="font-bold text-xl">{flight.to.city} ({flight.to.airport})</p>
                    <p className="text-lg">{flight.to.arrivalLocal}</p>
                </div>
            </div>

            <p className="text-center text-sm italic text-indigo-100">Please verify flight details with your airline.</p>
        </div>
    );
}

export default FlightInfoCard;