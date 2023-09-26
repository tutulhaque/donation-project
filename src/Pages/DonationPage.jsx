import React, { useEffect, useState } from 'react';
import DonationPageCard from '../Component/Donation/DonationPageCard';

const DonationPage = () => {
    const [donationItem,setDonationItem] = useState([]);
    const [noData,setNoData] = useState(false);
    const [showButton,setShowButton] = useState(false);

    useEffect(()=>{
        const getStoredItem = JSON.parse(localStorage.getItem('donations'))
        if(donationItem)
        {
            setDonationItem(getStoredItem);
        }else{
            setNoData('No data Found');
        }
    },[])
    const handleDeleteDonations = ()=>{
        localStorage.clear('favorites');
        setDonationItem([]);
        setNoData('No data Found');


    }

    
    return (
        // <div className="my-16">
        //     <DonationDetails key={donation.id} donation={donation}></DonationDetails>
        // </div>
        <div className="max-w-7xl mx-auto py-10">
            {donationItem?.length === 0 ||donationItem?.length ==undefined ? <h1 className='min-h-screen text-5xl flex justify-center items-center'>Data Not available</h1>:''}
            {donationItem?.length >0? <button onClick={handleDeleteDonations} className='btn btn-error block mx-auto text-white'> Delete all</button>:'' }
            {noData? <p className=''></p> : 
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10'> 
                {
                showButton? 
                donationItem?.map(donation => <DonationPageCard key={donation.id} donation={donation}></DonationPageCard>)
                :
                donationItem?.slice(0,4).map(donation => <DonationPageCard key={donation.id} donation={donation}></DonationPageCard>)
                }
            </div>}
            {donationItem?.length > 4 && !showButton && <button onClick={() => setShowButton(true)} className='btn btn-secondary block mx-auto'>Show more</button>}
        </div>
    );
};

export default DonationPage;