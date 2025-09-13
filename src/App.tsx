import React, { useState } from 'react';
import Header from './components/Header';
import TabButton from './components/TabButton';
import HarryPotterLocationCard from './components/HarryPotterLocationCard';
import TouristAttractionCard from './components/TouristAttractionCard';
import GosportHighlights from './components/GosportHighlights'; // This will be updated below
import GosportLocationCard from './components/GosportLocationCard'; // NEW IMPORT
import ContactInfoCard from './components/ContactInfoCard';
import FlightInfoCard from './components/FlightInfoCard';
import './App.css'; // Import the custom styles

// Import your data from the new files
import harryPotterLocations from './data/harryPotterLocations';
import touristAttractions from './data/touristAttractions';
import flightData from './data/flightData';
import gosportAttractions from './data/gosportAttractions'; // NEW DATA IMPORT

// ... (flightData remains the same)

function App() {
    const [activeTab, setActiveTab] = useState('harry');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'harry':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4">🧙 Harry Potter Filming Locations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {harryPotterLocations.map(location => (
                                <HarryPotterLocationCard key={location.id} {...location} />
                            ))}
                        </div>
                    </div>
                );
            case 'tourist':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">🏙️ London Tourist Attractions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {touristAttractions.map(attraction => (
                                <TouristAttractionCard key={attraction.id} {...attraction} />
                            ))}
                        </div>
                    </div>
                );
            case 'gosport':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-green-700 mb-4">🌊 Gosport Highlights</h2>
                        {/* Render the new GosportLocationCard components */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {gosportAttractions.map(location => (
                                <GosportLocationCard key={location.id} {...location} />
                            ))}
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <ContactInfoCard
                            title="🏠 Cousin's Address"
                            content={
                                <>
                                    <strong>14 Charnwood<br />
                                        Gosport<br />
                                        PO13 0ZF<br />
                                        Hampshire, UK</strong>
                                </>
                            }
                            buttonText="Get Directions to Cousin's House"
                            buttonLink="https://maps.google.com/maps?q=14+Charnwood,+Gosport+PO13+0ZF"
                        />
                        <ContactInfoCard
                            title="✈️ Airport Information"
                            content={
                                <>
                                    <strong>London Luton Airport (LTN)</strong><br />
                                    Airport Way, Luton LU2 9LY<br />
                                    Phone: +44 1582 405100
                                </>
                            }
                            buttonText="Get Directions to Luton Airport"
                            buttonLink="https://maps.google.com/maps?q=London+Luton+Airport"
                        />
                        <ContactInfoCard
                            title="🚨 Emergency Numbers (UK)"
                            content={
                                <>
                                    <strong>Emergency Services:</strong> 999<br />
                                    <strong>Non-Emergency Police:</strong> 101<br />
                                    <strong>NHS Non-Emergency:</strong> 111
                                </>
                            }
                        />
                        <ContactInfoCard
                            title="🏥 Useful Information"
                            content={
                                <>
                                    <strong>Currency:</strong> British Pound (£)<br />
                                    <strong>Time Zone:</strong> GMT/BST<br />
                                    <strong>Electrical Outlets:</strong> Type G (3-pin)<br />
                                    <strong>Emergency Text:</strong> Text 999 if you can't make voice calls
                                </>
                            }
                        />

                        <FlightInfoCard
                            type="Outbound"
                            flight={flightData.outbound}
                        />
                        <FlightInfoCard
                            type="Return"
                            flight={flightData.return}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <Header />

            {/* Tabs (UNCHANGED) */}
            <div className="p-4 text-center">
                <div className="flex flex-wrap justify-center gap-4">
                    <TabButton
                        onClick={() => setActiveTab('harry')}
                        active={activeTab === 'harry'}
                        colorClass="bg-indigo-600 hover:bg-indigo-700"
                    >
                        Harry Potter Directions
                    </TabButton>
                    <TabButton
                        onClick={() => setActiveTab('tourist')}
                        active={activeTab === 'tourist'}
                        colorClass="bg-blue-600 hover:bg-blue-700"
                    >
                        London Attractions
                    </TabButton>
                    <TabButton
                        onClick={() => setActiveTab('gosport')}
                        active={activeTab === 'gosport'}
                        colorClass="bg-green-600 hover:bg-green-700"
                    >
                        Gosport Destination
                    </TabButton>
                    <TabButton
                        onClick={() => setActiveTab('contact')}
                        active={activeTab === 'contact'}
                        colorClass="bg-gray-600 hover:bg-gray-700"
                    >
                        Contact & Flights
                    </TabButton>
                </div>
            </div>

            {/* Tab Content */}
            <main className="p-6">
                {renderTabContent()}
            </main>
        </div>
    );
}

export default App;