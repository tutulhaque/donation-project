import DonationPage from '../../Pages/DonationPage';
import swal from 'sweetalert';

const DonationDetails = ({ donation }) => {
    const { id, title, image,bgBtn, bgColor, details,textColor, amount, } = donation || {};
    // const myBgStyle = {
    //     backgroundColor: bgColor,
    // }
    const myTextColor = {
        color: textColor,
    }
    const myBgBtn = {
        backgroundColor: bgBtn,
    }

    const handleDonation = () => {
        const addedDonationArray = [];

        const storageItem = JSON.parse(localStorage.getItem('donations'));
        if (!storageItem) {
            addedDonationArray.push(donation);
            localStorage.setItem('donations', JSON.stringify(addedDonationArray));
            swal("WoW!", "Donation added successfully!", "success");
        } else {

            const isExisted = storageItem.find(donation => donation.id === id);
            if (!isExisted) {
                addedDonationArray.push(...storageItem, donation);
                localStorage.setItem('donations', JSON.stringify(addedDonationArray));
                swal("WoW!", "Donation added successfully!", "success");
            } else {
                swal("Error!", "Donation Already Existed!", "error");
            }

        }
    }
    return (
        <div className="max-w-7xl mx-auto py-14">
            <div className="card card-compact p-0">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-actions bg-black p-4 bg-opacity-60 justify-start -mt-20">
                    <button style={myBgBtn} onClick={handleDonation} className="btn border-none text-white">Donate ${amount}</button>
                </div>
                <div className="px-0 py-5">
                    <h2 className="card-title py-3 text-4xl font-bold">{title}</h2>
                    <p className='text-md'>{details}</p>
                </div>
            </div>

        </div>
    );
};

export default DonationDetails;