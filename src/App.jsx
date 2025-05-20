import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './index.css';
import 'remixicon/fonts/remixicon.css';

function App() {
  let [showContent, setShowContent] = useState(false)

  useGSAP(()=>{
     const tl = gsap.timeline();
     tl.to(".vi-mask-group", {
      rotate: 10,
      duration: "2",
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
     })
     .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
     })
  });

  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1,
      rotate: 0,
      bottom: "-25%",
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - .5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.6}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
    <div className='svg flex items-center justify-center fixed top-0 left-0 z-{100} w-full h-screen overflow-hidden bg-[#000]'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xmidYmid slice'>
       <defs>
        <mask id='viMask'>
         <rect width="100%" height="100%" fill='black' />
         <g className='vi-mask-group'>
          <text
          x='50%'
          y='50%'
          fontSize="250"
          textAnchor='middle'
          fill='white'
          dominantBaseline='middle'
          fontFamily='Arial Black'
          >
            VI
          </text>
         </g>
        </mask>
       </defs>
       <image
       href='./background.png'
       width='100%'
       height='100%'
       preserveAspectRatio='xmidYmid slice'
       mask='url(#viMask)'
       />
      </svg>
    </div>
    {showContent && (
    <div className='main w-full rotate-[-10deg] scale-[1.7]'>
      <div className='landing overflow-hidden relative w-full h-screen bg-black'>
        <div className='navbar absolute top-0 left-0 z-[10] w-full py-4 px-4'>
          <div className='logo flex gap-3'>
            <div className='lines flex flex-col gap-[4px]'>
             <div className='line w-7 h-[3px] bg-white '></div>
             <div className='line w-4 h-[3px] bg-white '></div>
             <div className='line w-2 h-[3px] bg-white '></div>
            </div>
            <h3 className='text-white text-[20px] -mt-[5px] leading-none'>Rockstar</h3>
          </div>
        </div>
        <div className='imagesdiv relative overflow-hidden w-full h-screen '>
          <img className='absolute sky scale-[1.4] rotate-[-3deg] top-0 left-0  w-full h-full object-cover' src="./cloudbg.png" alt="" />
          <img className='absolute bg scale-[1.7] rotate-[-5deg] top-0 left-0 w-full h-full object-cover' src='./buildings.png' alt=''/>
        <div className="text text-white flex flex-col gap-2 leading-none absolute top- left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
          <h1 className='text-7xl -ml-15'>grand</h1>
          <h1 className='text-7xl ml-5'>theft</h1>
          <h1 className='text-7xl -ml-15'>auto</h1>
        </div>
          <img className='character absolute -bottom-[150%] top-0 left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] ' src="./Jason.png" alt="" />
          
        </div>
        <div className='btmbar absolute bottom-0 left-0 w-full py-4 px-4 bg-gradient-to-t from-black to-transparent text-white '>
          <div className='flex gap-4 items-center'>
          <i className="text-2xl ri-arrow-down-line"></i>
          <h3 className='text-[15px] font-[Helvetica_Not_Display]'>Scroll Down</h3>
          
          </div>
          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30px]' src="./ps5.png" alt="" />
        </div>
      </div>
      <div className='w-full h-screen flex items-center justify-center bg-black px-10'>
        <div className="cntnr flex text-white w-full h-[80%]">
        <div className='limg relative w-1/2 h-full'>
          <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[80%]' src="./imag.png" alt="" />
        </div>
        <div className="rg w-[35%] h-full py-5">
          <h1 className='text-3xl'>still running,</h1>
          <h1 className='text-3xl'>not hunting</h1>
          <p className='mt-5 text-[10px] font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate unde dolorem alias eos molestiae commodi, quis nisi doloribus consectetur ex repellendus architecto.</p>
          <p className='mt-2 text-[10px] font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias error numquam ex distinctio, fugiat iure laborum facilis quo nobis repellat nisi optio, cum minima. Vero facilis animi quidem dolore!</p>
          <p className='mt-5 text-[10px] font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias minus, est voluptate laudantium repudiandae exercitationem earum facere assumenda ea, animi dolorum odio amet itaque illum nihil unde alias delectus!
          </p>
          <button className='bg-yellow-500 px-5 py-5  text-black mt-5'>Download Now</button>
        </div>
        </div>
        
      </div>
    </div>
    )}
    </>
  );
}

export default App