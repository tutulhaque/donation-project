import DonationCard from "./DonationCard";

const Donations = ({donations}) => {
    console.log(donations);

    return (
        <div className="max-w-7xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-2 lg:mx-0">
            {
                donations?.map(donation =><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }

            </div>
        </div>
    );
};

export default Donations;