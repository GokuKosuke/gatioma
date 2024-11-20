// import React, { useEffect, useState } from 'react'
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// function Page1Content() {

//   const [changePink, setChangePink] = useState(false);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.fromTo(".heartsOmae > img:nth-child(1)", {
//       opacity: 0,
//       x: -400,
//       y: 600,
//       rotate: 360
//     },
//     {
//       opacity: 1,
//       x: 62,
//       y: 0,
//       rotate: 60,
//       scrollTrigger: {
//         trigger: ".heartsOmae",
//         start: "top 60%",
//         end: "top 55%",
//         scrub: 2,
//         markers: true,
//       }
//     })
//     gsap.fromTo(".heartsOmae > img:nth-child(2)", {
//       opacity: 0,
//       x: 600,
//       y: 600,
//       rotate: -360
//     },
//     {
//       opacity: 1,
//       x: -62,
//       y: 0,
//       rotate: -60,
//       scrollTrigger: {
//         trigger: ".heartsOmae",
//         start: "top 60%",
//         end: "top 55%",
//         scrub: 2,
//         markers: true,
//       }
//     })
//     gsap.fromTo(".pinkBack", {

//     },
//     {
//       opacity: 1,
//       height: 100,
//       scrollTrigger: {
//         trigger: ".heartsOmae",
//         start: "top 60%",
//         end: "top -155%",
//         scrub: true,
//         markers: true,
//         onEnter: () => setChangePink(true),
//         onLeaveBack: () => {setTimeout(() => setChangePink(false), 300)}
//       }
//     })
//   })
//   return (
//     // <div className="page1Content"> 
//     //   <div className="heartsOmae">
//     //     <img src="/peaceomae.PNG" alt="" />
//     //     <img src="/loveomae.PNG" alt="" />
//     //     {/* <img src="" alt="" /> */}
//     //   </div>
//     //     <div className="pinkBack">
//     //       <div className={`pink ${changePink ? "changedPink" : ""}`}></div>
//     //     </div>
//     // </div>
//   )
// }

// export default Page1Content
