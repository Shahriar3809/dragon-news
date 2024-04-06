/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title, _id, image_url, details} = news;
    return (
      <div className="card bg-base-100 shadow-xl mb-5">
        <figure>
          <img className="w-full h-[400px]" src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600">
                Read More..
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    );
};

export default NewsCard;