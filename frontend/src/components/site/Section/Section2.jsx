import React from 'react'
import "./Section2.scss"
const Section2 = () => {
  return (
    <div className='section2_main'>
      <div className='section2_title'>
        <h3>Shop for Different Categories</h3>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className='container'>
        <div className='row photo_mains'>
          <div className="col-lg-8 col-md-8 mb-10">
            <div className='photo_left_main'>
              <div className="row photo_1">
                <div className="col-lg-6 col-md-6 mb-20">
                  <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />
                </div>
              </div>
              <div className='photo_left_down'>
                <div className="col-lg-12 col-md-12">
                  <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Section2