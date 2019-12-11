import React from "react";
import "./styles/CampaignCardSmall.scss";

function CampaignCardSmall() {
  return (
    <div className="campaignCard">
      <img
        className="placeholder"
        src="/img/placeholderCampaignCard.png"
        alt=""
      ></img>
      <h2 className="campaignTitle">Lorem ipsum </h2>
      <p className="campaignDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        fugit, commodi eaque quod voluptatem labore
      </p>
      <a className="more_info" href="...">
        <img src="/img/moreInfo.png" alt="more info"></img>
      </a>
    </div>
  );
}

export default CampaignCardSmall;