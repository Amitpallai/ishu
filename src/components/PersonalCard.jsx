import React from 'react';

const PersonalCard = () => {
    return (
        <div className="min-h-full flex flex-col items-center justify-center p-4 rounded-3xl bg-gray-100">
            {/* Main Profile Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Govind prasad tiwari</h1>
                    <div className="flex items-center justify-center text-gray-500 text-sm">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connecting
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/profile.jpg" // Replace with the actual path to the image
                        alt="Sienna Brooks wearing a 'Health Is Wealth!' cap"
                        className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white"
                    />
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between w-full max-w-sm mt-6 p-2">
                <div className="flex items-center space-x-3">
                    <img
                        src="/profile.jpg" // Replace with the actual path to the thumbnail
                        alt="Sienna Brooks thumbnail"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-lg font-semibold text-gray-800">@Govind</p>
                        <p className="text-sm text-gray-500">12m ago</p>
                    </div>
                </div>
                <button className="bg-black text-white px-5 py-2 rounded-full shadow-lg flex items-center space-x-2 transition-transform duration-200 active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Follow</span>
                </button>
            </div>
        </div>
    );
};

export default PersonalCard;