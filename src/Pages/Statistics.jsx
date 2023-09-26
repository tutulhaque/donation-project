import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#FF5733', '#3366FF'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="custom-tooltip">
        <p>{value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

const Statistics = () => {
  const [storageItem, setStorageItem] = useState([]);
  const [myDonation, setMyDonation] = useState(0);

  useEffect(() => {
    const getStoredItem = JSON.parse(localStorage.getItem('donations')) || [];
    setStorageItem(getStoredItem);
  }, []);

  useEffect(() => {
    if (storageItem.length > 0) {
      const myDonationValue = (storageItem.length / 12) * 100;
      setMyDonation(myDonationValue);
    } else {
      setMyDonation(0);
    }
  }, [storageItem]);

  const donationRemaining = 100 - myDonation;

  const data = [
    { name: 'Your Donation', value: myDonation },
    { name: 'Total Donation', value: donationRemaining },
  ];

  return (
    <div className='min-h-screen flex justify-center items-center text-white'>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
