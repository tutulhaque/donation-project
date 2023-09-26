import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Header/Banner/Banner";
import Donations from "../../Component/Donation/Donations";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [filteredDonations, setFilteredDonations] = useState(donations);

  // Function to update filtered donations
  const updateFilteredDonations = (filteredDonations) => {
    setFilteredDonations(filteredDonations);
  };

  return (
    <div>
      <Banner donations={donations} updateFilteredDonations={updateFilteredDonations} />
      <Donations donations={filteredDonations} />
    </div>
  );
};

export default Home;
