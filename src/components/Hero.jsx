import React from "react";
import heroImg from "../assets/images/hero.svg";
import CountUp from 'react-countup';
function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm: flex-col md:flex-row">
          {/* hero left content  */}
          <div className="w-full md:basis-1/2 ">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-slate-950 font-[600]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-slate-950 font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I am Muhammad Kamran <br />
              Software Developer
            </h1>
            <div className="flex items-center gap-6 mt-7 ">
              <a href="#contact">
                <button
                  className="bg-slate-400	text-white font-[500] flex items-center gap-2 hover:bg-slate-950 ease-in duration-300
                py-2 px-4 rounded-[8px]"
                >
                  <i class="ri-mail-line "></i>
                  Hire Me
                </button>
              </a>
              <a
                className="	text-slate-900 font-[600] flex items-center gap-2
                border-b border-solid border-slate-950 py-2 px-4 text-[16px]"
                href="#portfolio"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-slate-900 font-[600] mt-14
              text-[15px] leading-7 sm:pl-14 sm:pr-10 "
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quisquam quam fugit fugiat, corrupti odio, deleniti voluptate
              laudantium, recusandae commodi tempora expedita consectetur culpa
              pariatur quas harum porro dolorum sint.
            </p>
            <div className="flex items-center gap-7 mt-14 ">
              <span className="text-slate-900 text-[16px] font-[600] ">
                Follow me:
                
              </span>
              <span>
                  <a className="text-slate-900 text-[20px] font-[600]" href="#youtube">
                  <i class="ri-youtube-fill"></i>
                  </a>
                </span>
                <span>
                  <a className="text-slate-900 text-[20px] font-[600]" href="#github">
                  <i class="ri-github-fill"></i>
                  </a>
                </span>
                <span>
                  <a className="text-slate-900 text-[20px] font-[600]" href="#facebook">
                  <i class="ri-facebook-circle-fill"></i>
                  </a>
                </span>
                <span>
                  <a className="text-slate-900 text-[20px] font-[600]" href="#instagram">
                  <i class="ri-instagram-fill"></i>
                  </a>
                </span>
            </div>
          </div>
          {/* hero left content ends */}
          {/* hero image start */}
          <div className="basics-1/3 mt-10 sm:mt-0  ">
            <figure className="flex items-center justify-center ">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          <div className="md:basics-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end ">
            <div className="mb-10">
              <h2 className="text-slate-900 font-[700] text-[32px] ">
               <CountUp start={0} end={6} duration={4} suffix="+" />
              </h2 >
              <h4 className="text-slate-900 font-[600] text-[18px] ">
                Years of experience
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-slate-900 font-[700] text-[32px] ">
               <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2 >
              <h4 className="text-slate-900 font-[600] text-[18px] ">
               Success rate 
              </h4>
            </div>



            <div className="mb-10">
              <h2 className="text-slate-900 font-[700] text-[32px] ">
               <CountUp start={0} end={150} duration={4} suffix="+" />
              </h2 >
              <h4 className="text-slate-900 font-[600] text-[18px] ">
                Happy clients
              </h4>
            </div>


            <div className="mb-10">
              <h2 className="text-slate-900 font-[700] text-[32px] ">
               <CountUp start={0} end={259} duration={4} suffix="+" />
              </h2 >
              <h4 className="text-slate-900 font-[600] text-[18px] ">
                Projects completetd
              </h4>
            </div>



          </div>

          {/* hero image end */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
