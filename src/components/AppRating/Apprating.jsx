import React from 'react'
import Button from '../common/Button/Button'
import "./Apprating.css"

const getPrefix=()=>{
    return <img src='https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png' alt='logo' className='app-rating-icon'/>
}

const getandroidPrefix=()=>{
    return <img src='https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png' alt='logo' className='app-rating-icon'/>
}

const Apprating = () => {
  return (
    <div className='max-width flex app-rating' >
        <div className="app-rating-block flex flex-col ">
            <div className="flex">
                <div className="app-rating-value flex flex-col ">4.8
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" className='app-rating-stars' alt="rating" />
                </div>
                <div className="app-rating-platform">app <br/> store </div>
            </div >
            <div className="non-mobile">
                <Button buttonText="download the app" prefix={getPrefix()} customClass="app-rating-button" />
            </div>
        </div>

        <div className="app-rating-block flex flex-col ">
            <div className="flex">
                <div className="app-rating-value flex flex-col ">4.7
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png" className='app-rating-stars' alt="rating" />
                </div>
                <div className="app-rating-platform">Play <br/> store </div>
            </div >
            <div className="non-mobile">
                <Button buttonText="download the app" prefix={getandroidPrefix()} customClass="app-rating-button" />
            </div>
        </div>

        <div className="only-mobile">
            <Button buttonText="download the app"/>
        </div>

    </div>
  )
}

export default Apprating