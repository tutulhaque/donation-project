import React, { useState } from 'react';

const Banner = ({ donations, updateFilteredDonations }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        const input = event.target.value.toLowerCase();
        setSearchInput(input);
    };

    const handleSearchClick = () => {
        // Filter donations based on the search
        const filtered = donations.filter((donation) =>
            donation.category.toLowerCase().includes(searchInput)
        );

        // Update the filtered donations in the Home component's state
        updateFilteredDonations(filtered);
    };

    return (
        <div>
            <div
                className="hero h-[350px] md:h-[500px] mt-7"
                style={{
                    backgroundImage:
                        'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
                }}
            >
                <div className="hero-overlay bg-opacity-95 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
                            I Grow By Helping People In Need
                        </h1>
                        <div className="py-5">
                            <input
                                type="text"
                                placeholder="Search By Category"
                                className="input text-red-600 rounded-none input-bordered w-full max-w-xs"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                            />
                            <button
                                className="text-white btn btn-error btn-md rounded-none md:rounded-r-md mt-2 md:mt-0"
                                onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
