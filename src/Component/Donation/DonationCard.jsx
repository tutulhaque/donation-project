import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { id, image, title, category, bgColor, textColor } = donation;

    const myBgStyle = {
        backgroundColor: bgColor,
    }
    const myTextColor = {
        color: textColor,
    }

    return (
        <Link to={`/donation/${id}`}>
            <div>
                <div style={myBgStyle} className="card card-compact rounded-md">
                    <figure><img src={image} alt="Title" /></figure>
                    <div style={myTextColor} className="card-body">
                    <div className="card-actions justify-start">
                    <button style={{...myBgStyle,...myTextColor}} className="btn btn-xs rounded-md border-none ">{category}</button>
                        </div>
                        <h2 style={myTextColor} className="card-title">{title}</h2>
                    </div>
                </div>


            </div>
        </Link>
    );
};

export default DonationCard;