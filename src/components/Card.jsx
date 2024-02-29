import React from "react";

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card-image" />
      <div className="card-stats">
        <img src="../images/star.png" className="card-star" />
        <span>{props.rating}</span>
        <span className="gray">{props.location}</span>
        <span className="gray">({props.reviewCount}) • </span>
      </div>
      <h2 className="card-title">{props.title}</h2>
      <p>
        <span className="bold card-price">From ${props.price}</span> / person
      </p>
    </div>
  );
}
