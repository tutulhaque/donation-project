import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetails from "./DonationDetails";

const Donation = () => {
    const [donation, setDonation] = useState({});
    const { id } = useParams();
    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations?.find(donation => donation.id === id);
        setDonation(findDonation);

    }, [id, donation])
    return (
        
        <div>
           <DonationDetails key={donation.id} donation={donation}></DonationDetails>

        </div>
    );
};

export default Donation;