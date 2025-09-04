
const ProfileCard = () => {
    return (
        <div className="bg-white/30 backdrop-blur-mdjgit init
          text-white h-full flex items-center justify-center p-4  rounded-3xl">
            <div className="w-full max-w-xs rounded-3xl overflow-hidden  ">
                {/* Image Section */}
                <div className="relative aspect-[1/1] overflow-hidden rounded-3xl">
                    <img
                        src="/profile.jpg" // Replace with the actual path to your image

                        className="w-full h-full object-center object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-semibold mb-2 tracking-wide">
                        Govind prasad tiwari
                    </h2>
                    <p className="text-md  mb-8">
                     Data analyst
                    </p>

                    {/* Button Section */}
                    <div className="flex items-center justify-center">
                        <button className="bg-gray-800 text-gray-200 py-3 px-6 rounded-full flex items-center justify-between space-x-4 transition-colors duration-300 hover:bg-gray-700">
                            <span className="text-sm">Know more</span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;