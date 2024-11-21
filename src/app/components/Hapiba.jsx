import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Hapiba() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    gsap.fromTo(".hapibaTexts > div:nth-child(1)", {
      y: 0,
      opacity: 1
    },
    {
      y: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hapiba" ,
         start: "top 10%",
        end: "top 0%",
        // markers: true,
        scrub: 1
      }
    })
    gsap.fromTo(".hapibaTexts > div:nth-child(3)", {
      y: 0,
      x: 0,
      opacity: 1
    },
    {
      y: 300,
      x: -400,
      rotate: -360,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hapiba" ,
         start: "top 10%",
        end: "top 0%",
        scrub: 1
      }
    })
    gsap.fromTo(".hapibaTexts > div:nth-child(4)", {
      y: 0,
      opacity: 1
    },
    {
      y: 400,
      x: 500,
      rotate: 360,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hapiba" ,
         start: "top 10%",
        end: "top 0%",
        // markers: true,
        scrub: 1
      }
    })
    gsap.fromTo(".omae20 > img:nth-child(1)", {
      opacity: 1
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hapiba" ,
        start: "top 10%",
        end: "top 0%",
        // markers: true,
        scrub: 1
      }
    })
    gsap.fromTo(".omae20 > img:nth-child(2)", {
      opacity: 1
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hapiba" ,
         start: "top 10%",
        end: "top 0%",
        // markers: true,
        scrub: 1
      }
    })

  }, [])





  return (
    <div className="hapiba">
      <div className="hapibaTexts">
        <div>おまえちゃん</div>
        <div className='omae20'>
          <img src="/omae2.PNG" alt="" />
          <img src="/omae0.PNG" alt="" />
        </div>
        <div>さい</div>
        <div>おめでとう</div>
      </div>
      <div className="lottie">
        <div id="lottie-container"></div>
      </div>
    </div>
  )
}

export default Hapiba
