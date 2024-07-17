import React from "react";

function Headers() {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">      {/* leading is used to set line height/ distance between lines of text */}
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-slate-400	 text-white text-[18px] font-[500px] rounded-full flex items-center justify-center">
              K
            </span>
            <div className="leading-[20px]">
              <h1  className="text-xl text-slate-950 font-[700] ">Kamran</h1>
              <p className=" text-slate-950 font-[700] text-[16px]">Personal</p>
            </div>
          </div>
          {/* Logo -End */}

          {/* Menu Start */}

          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="  text-slate-950 font-[600]" href="#about">
                  {" "}
                  About
                </a>{" "}
              </li>
              <li>
                <a className="  text-slate-950 font-[600]" href="#services">
                  {" "}
                  Services
                </a>{" "}
              </li>
              <li>
                <a className="  text-slate-950 font-[600]" href="#portfolio">
                  Portfolio
                </a>{" "}
              </li>
              <li>
                <a className="  text-slate-950 font-[600]" href="#contact">
                  Contact
                </a>{" "}
              </li>
            </ul>
          </div>

          {/* Menu End */}

          {/* Menu right*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 border border-solid border-slate-950 py-2 px-4 rounded-[8px] hover:bg-slate-600 hover:text-white hover:font-[500px] ease-in duration-700 max-h-[40px]  text-slate-950 font-[600]"><i class="ri-send-plane-line"></i> Lets Talk</button>
            <span className="text-2xl text-slate-950 md:hidden cursor-pointer"><i class="ri-menu-line"></i></span>    {/* Menu icon for mobile view/ hidden in desktops */}
          </div>


          {/* Menu Right End */}
        </div>
      </div>
    </header>
  );
}

export default Headers;
