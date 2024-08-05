import React from 'react'

const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }


  return (
    <div className='card'>
      {badgeText && <div div className='card--badge'>{badgeText}</div>}
      <img src={`./GGG/${props.coverImg}`} alt="" className='card--image' />
      <div className='card--stats'>
        <img src="./Airbnbimages/Star 1.png" alt='' className='card--star' />
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price} </span>/ person</p>
    </div >
  )
}

export default Card
