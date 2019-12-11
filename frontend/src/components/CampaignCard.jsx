import React from "react";
import { Link } from "react-router-dom";
import "./styles/CampaignCard.scss";

function CampaignCard() {
  return (
    <div className="campaignCard">
      <Link to={`/campaign/nom-de-la-campagne`}>
        <img
          className="placeholder"
          src="/img/placeholderCampaignCard.png"
          alt=""
        ></img>
        <h2 className="campaignTitle">Lorem ipsum </h2>
        <p className="campaignDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugit, commodi eaque quod voluptatem labore, et, sapiente nisi
          inventore qui velit laboriosam expedita quasi veniam impedit vel
          tenetur ipsam earum.
        </p>
        <a className="more_info" href="...">
          <img src="/img/moreInfo.png" alt="more info"></img>
        </a>
      </Link>
    </div>
  );
}

export default CampaignCard;