import { Link } from "react-router-dom";
const DonationPageCard = ({ donation }) => {
    const { id, image, title, category,bgBtn, amount, bgColor, textColor } = donation;

    const myBgStyle = {
        backgroundColor: bgColor,
    }
    const myTextColor = {
        color: textColor,
    }
    const myBgBtn = {
        backgroundColor: bgBtn,
    }
    return (
        <div>
            <div className="hero p-0">
                <div style={myBgStyle} className="hero-content w-full p-0 justify-start flex-col lg:flex-row">
                   <img src={image} className="w-80 rounded-lg" />
                    <div className="px-3">
                        <button style={{ ...myBgStyle, ...myTextColor }} className="btn btn-xs rounded-md border-none ">{category}</button>
                        <h1 className="text-xl font-bold">{title}</h1>
                        <h1 style={myTextColor} className="text-2xl font-bold py-1">${amount}</h1>
                        <Link to={`/donation/${id}`}><button style={{...myBgBtn}} className="btn btn-md rounded-md border-none text-white">View Details</button> </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationPageCard;