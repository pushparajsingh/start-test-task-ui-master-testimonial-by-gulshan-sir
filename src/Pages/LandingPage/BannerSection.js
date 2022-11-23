import React from 'react'
import ClinetLogo1 from '../../assets/images/client_logo_01.png'
import ClinetLogo2 from '../../assets/images/client_logo_02.png'
import ClinetLogo3 from '../../assets/images/client_logo_03.png'
import ClinetLogo4 from '../../assets/images/client_logo_04.png'


const BannerSection = () => {

  return (
      <section className="client-logo-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={ClinetLogo1} alt="Logo" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={ClinetLogo2} alt="Logo" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={ClinetLogo3} alt="Logo" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={ClinetLogo4} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BannerSection