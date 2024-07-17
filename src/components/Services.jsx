import React from "react";
import frontEnd from "../assets/images/frontEnd.png";
import backend from "../assets/images/backend.png";

import apps from "../assets/images/apps.png";
import design from "../assets/images/design.png";


function Services() {
  return (
    <section>
      <div className="container lg:pt-5 ">
        <div className="text-center">
          <h2 className="text-slate-900 font-[800] text-[2.4rem] mb-5 ">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] text-slate-900 lg:mx-auto font-[500] leading-7 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            aliquam dolorem ab saepe repellendus maxime hic consequatur corrupti
            perspiciatis incidunt. Quae expedita vitae culpa saepe perferendis
            quaerat illo perspiciatis recusandae.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12 ">
          <div className="w-fill py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 ">
            <div className="relative text-gray-700 antialiased text-sm text-semibold ">
              {/* vertical line running through the middle  */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1-1/2 "></div>
              {/* left card */}

              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="50"
                        className="bg-white p-4 rounded shadow group hover:bg-slate-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-slate-900 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          Front end development
                        </h3>
                        <p className="text-[15px] text-slate-900 group-hover:text-white font-[500] leading-6">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nam blanditiis maxime sint, tempore mollitia
                          optio quaerat iusto! Magnam molestiae possimus odit,
                          quo libero eligendi optio, tenetur recusandae,
                          deserunt repellendus labore.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div  className="rounded-full bg-slate-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                        <img src={frontEnd} alt="" />
                    </figure>
                  </div>


                


                </div>
              </div>

               {/* right card */}

               <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        data-aos-delay="100"
                        className="bg-white p-4 rounded shadow group hover:bg-slate-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-slate-900 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          Backend development
                        </h3>
                        <p className="text-[15px] text-slate-900 group-hover:text-white font-[500] leading-6">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nam blanditiis maxime sint, tempore mollitia
                          optio quaerat iusto! Magnam molestiae possimus odit,
                          quo libero eligendi optio, tenetur recusandae,
                          deserunt repellendus labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="rounded-full bg-slate-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                        <img src={backend} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

                {/* left card */}
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1400"
                        data-aos-delay="150"
                        className="bg-white p-4 rounded shadow group hover:bg-slate-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-slate-900 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          UI UX design
                        </h3>
                        <p className="text-[15px] text-slate-900 group-hover:text-white font-[500] leading-6">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nam blanditiis maxime sint, tempore mollitia
                          optio quaerat iusto! Magnam molestiae possimus odit,
                          quo libero eligendi optio, tenetur recusandae,
                          deserunt repellendus labore.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div  className="rounded-full bg-slate-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                        <img src={design} alt="" />
                    </figure>
                  </div>


                


                </div>
              </div>
               {/* right card */}

               <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-delay="200"
                        className="bg-white p-4 rounded shadow group hover:bg-slate-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-slate-900 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl ">
                          App development
                        </h3>
                        <p className="text-[15px] text-slate-900 group-hover:text-white font-[500] leading-6">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nam blanditiis maxime sint, tempore mollitia
                          optio quaerat iusto! Magnam molestiae possimus odit,
                          quo libero eligendi optio, tenetur recusandae,
                          deserunt repellendus labore.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div  className="rounded-full bg-slate-400 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                        <img src={apps} alt="" />
                    </figure>
                  </div>


                


                </div>
              </div>






            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
