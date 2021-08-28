import React from 'react'
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';
import {bathCount, formatHomePrice, formatDate} from './HomeCardUtils'

export const HomeCard = ({
  images,
  bedrooms,
  fullBaths,
  halfBaths,
  squareFootage,
  price,
  address,
  listingDate,
  mlsId,
  liked,
  onHeartClick
}) => {
  const totalBathCount = bathCount(fullBaths, halfBaths)
  const formattedPrice  = formatHomePrice(price)
  const formattedListDate = formatDate(listingDate)

  const {
    full,
    city,
    state
  } = address

  const [image1, image2] = images

  const handleHeartClick = () => {
    onHeartClick?.(mlsId)
  }

  return (
    <div className="homecard">
      <span onClick={handleHeartClick} className="heart">
        <img src={liked ? heartFill : heartStroke} className="App-logo" alt={liked ? "favorite icon" : "unfavorite icon"} />
      </span>
      <div className="homecard-image">
        <picture>
            <source srcSet={image1}
              media="(min-width: 800px)"
              className="homecard-image"/>
            <img src={image2} alt="" className="homecard-image" />
        </picture>
      </div>
      <div className="homecard-details">
        <p className="homecard-details-specs">
          <span>{`${bedrooms} BR`}</span>
          <span>{`${totalBathCount} Bath`}</span>
          <span>{`${squareFootage} Sq ft`}</span>
        </p>
        <p className="homecard-details-price">{formattedPrice}</p>
        <p className="homecard-details-address">{`${full}, ${city}, ${state}`}</p>
        <p className="homecard-details-listingDate">{`Listed: ${formattedListDate}`}</p>
      </div>
    </div>
  )
}

export default HomeCard
