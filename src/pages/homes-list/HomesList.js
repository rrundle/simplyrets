import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import { browserFetch, writeToCache, readFromCache } from '../../helpers'
import {HomeCard} from '../../components/HomeCard'
import {PROPERTIES_CACHE_URL, LIKED_PROPERTIES_CACHE_URL} from '../../constants'
import {TombstoneLoader} from '../../components'

/**
 * @HomesList
 *
 * Fetches the properties from the API And stores them in localStorage
 * Also renders the list of homes that is returned.
 */
export const HomesList = () => {
  const [ loading, setLoading ] = useState(false)
  const [ likedHomes, setLikedHomes ] = useState([])

  useEffect(() => {
    const getProperties = async () => {
      setLoading(true)
      try {
        var encodedBasicAuth = Buffer.from('simplyrets:simplyrets').toString('base64');
        const response = await browserFetch({
          url: 'https://api.simplyrets.com/properties',
          headers: {
            'Authorization': `Basic ${encodedBasicAuth}`
          }
        })
        const body = await response.json()
        writeToCache(PROPERTIES_CACHE_URL, body)
        writeToCache(LIKED_PROPERTIES_CACHE_URL, [])
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }
    const cachedProperties = readFromCache(PROPERTIES_CACHE_URL);
    if (!cachedProperties) {
      getProperties()
    }
  }, [])

  // handles the click on a heart and adds or removes it fro mthe list
  // of mlsId's that track which homes are favorited
  const onHeartClick = (id) => {
    const likedProperties = readFromCache(LIKED_PROPERTIES_CACHE_URL)
    const findMatchIndex = likedProperties.indexOf(id);
    let updatedList;
    if (findMatchIndex > -1) {
      updatedList = likedProperties.filter((property, i) => i !== findMatchIndex)
    } else {
      updatedList = [...likedProperties, id]
    }
    writeToCache(LIKED_PROPERTIES_CACHE_URL, updatedList)
    // need to trigger a re-render so using local state
    setLikedHomes(updatedList)
  }

  return (
    <main>
      <nav className="sticky-nav">Property Listings</nav>
      <section className="properties-list">
        {
          loading ? (
            <>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                  <div className="loading-item" key={`loading-item-${i}`}>
                    <TombstoneLoader />
                  </div>
                ))
              }
            </>
          ) : (
            <>
              {
                readFromCache(PROPERTIES_CACHE_URL).map((property, i) => {
                  const {
                    photos = [],
                    address = {},
                    property: {
                      bedrooms,
                      bathsFull,
                      bathsHalf,
                      area: squareFootage,
                    } = {},
                    listDate,
                    listPrice,
                    mlsId
                  } = property
                  const liked = readFromCache(LIKED_PROPERTIES_CACHE_URL).includes(mlsId)
                  return (
                    <div key={`property-list-item-${i}`}>
                      <HomeCard mlsId={mlsId}
                        images={photos}
                        bedrooms={bedrooms}
                        fullBaths={bathsFull}
                        halfBaths={bathsHalf}
                        squareFootage={squareFootage}
                        price={listPrice}
                        address={address}
                        listingDate={listDate}
                        liked={liked}
                        onHeartClick={onHeartClick}
                        likedHomes={likedHomes} />
                    </div>
                  )
                })
              }
            </>
          )
        }
      </section>
      <Switch>
        <Route path={`homes-list/${'houseId'}`}>
          <div>detail</div>
        </Route>
      </Switch>
    </main>
  )
}

export default HomesList
