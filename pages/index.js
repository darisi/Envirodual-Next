import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container block relative w-full h-full">
        <Head>
          <title>envirodual</title>
          <meta
            name="description"
            content="Sustainable Energy and Environmental Management, Research and Innovation"
          />
          <meta property="og:title" content="envirodual" />
          <meta
            property="og:description"
            content="Sustainable Energy and Environmental Management, Research and Innovation"
          />
        </Head>
        <div className="home-container1">
          <img
            alt="pastedImage"
            src="/external/pastedimage-hnmk.svg"
            className="home-pasted-image block w-fit"
          />
        </div>
        <div className="home-container2">
          <img
            alt="pastedImage"
            src="/external/pastedimage-ws28.svg"
            className="home-pasted-image1"
          />
          <h1 className="home-text text-center">
            Sustainable Energy and Environmental Management, Research and
            Innovation
          </h1>
          <span className="home-text1">
            Naša spletna stran je v izdelavi in bo kmalu spet na voljo.
          </span>
          <div className="home-container3">
            <span className="home-text2">
              <span className="home-text3">E:</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <a href="mailto:info@envirodual.com?subject=" className="home-link">
              info@envirodual.com
            </a>
          </div>
          <span className="home-text5">
            <span className="home-text6">T:</span>
            <span> +386(0)41 343 932</span>
          </span>
          <span className="home-text8">
            Envirodual d.o.o., Tepanje 28D, 3210 Sl. Konjice, Slovenija
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(
              226.25deg,
              #00bef3 0%,
              #90ca73 100%
            );
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 1024px;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .home-pasted-image {
            width: 100%;
            height: auto;
            margin-left: 0px;
            margin-right: 0px;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 24px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 195px;
            height: 31px;
          }
          .home-text {
            color: #ffffff;
            width: 720px;
            font-size: 24px;
            align-self: center;
            margin-top: 24px;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .home-text1 {
            color: #90ca73;
            font-size: 14px;
            margin-top: 36px;
            text-align: center;
            font-family: Poppins;
            padding-top: 12px;
            padding-left: 24px;
            border-radius: 12px;
            margin-bottom: 36px;
            padding-right: 24px;
            padding-bottom: 12px;
            text-transform: none;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text2 {
            color: rgb(255, 255, 255);
            margin-top: 24px;
            text-align: center;
            font-family: Inter;
            margin-right: 8px;
            text-transform: none;
            text-decoration: none;
          }
          .home-text3 {
            font-weight: 700;
          }
          .home-link {
            color: rgb(255, 255, 255);
            margin-top: 24px;
            text-align: center;
            font-family: Inter;
            text-transform: none;
            text-decoration: none;
          }
          .home-text5 {
            color: rgb(255, 255, 255);
            margin-top: 8px;
            text-align: center;
            font-family: Inter;
            text-transform: none;
            text-decoration: none;
          }
          .home-text6 {
            font-weight: 700;
          }
          .home-text8 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            margin-top: 48px;
            text-align: center;
            font-family: Inter;
            text-transform: none;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-container1 {
              width: auto;
              margin-left: -20px;
              margin-right: -20px;
            }
          }
          @media (max-width: 767px) {
            .home-container1 {
              width: auto;
              margin-left: -20px;
              margin-right: -20px;
            }
            .home-container2 {
              width: auto;
              padding: 24px;
              align-items: center;
              flex-direction: column;
            }
            .home-text {
              width: 500px;
              font-size: 18px;
            }
          }
          @media (max-width: 375px) {
            .home-container {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-container1 {
              width: auto;
              margin-left: -20px;
              margin-right: -20px;
            }
            .home-pasted-image {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-container2 {
              height: auto;
              padding: 24px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-text {
              width: auto;
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
