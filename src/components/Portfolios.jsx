import React, { useEffect, useState } from "react";

import Data from "../assets/data/portfolioData";
import Model from "./Model";
function Portfolios() {
  const [nextItems, setnextItems] = useState(6);
  const [showLess, setShowLess] = useState(false);
  const [portfolios, setportfolios] = useState(Data);
  const [selectTab,setSelectedTab] = useState('All');
  const [showModel, setShowModel] = useState(false);
  const [activeID, setActiveID] = useState(false);


  const loadMoreHandler = () => {
    setnextItems((previousValue) => previousValue + 10);
    setShowLess(true);
  };
  const showLessHandler = () => {
    setnextItems(6); // Reset the number of items to the initial value
    setShowLess(false); // Set showLess to false to enable "Load More" button
  };
  useEffect(() => {
    if (selectTab==="All") {
        setportfolios(Data)   
    }
    if (selectTab==="Web Design") {
        const filteredData=Data.filter(item=>item.category==="Web-Design")
        setportfolios(filteredData)   
    }
    if (selectTab==="Ux design") {
        const filteredData=Data.filter(item=>item.category==="Ux")
        setportfolios(filteredData)   
    }
   
  },[selectTab])

  // this funcction is for showing details of each selected portfolio
  const showModelHandler =(id)=> {
    setShowModel(true);
    setActiveID(id);

  }
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap mt-12">
          <div className="mb-3 sm:mb-0">
            <h3 className="text-slate-900 text-[2rem] font-[700]">
              My recent project
            </h3>
          </div>
          <div className="flex gap-3 mb-3 ">
            <button onClick={()=>setSelectedTab("All")} className="text-slate-900 border border-solid border-slate-900 py-2 px-4 rounded-[8px] ">
              All
            </button>
            <button onClick={()=>setSelectedTab("Web Design")} className="text-slate-900 border border-solid border-slate-900 py-2 px-4 rounded-[8px] ">
              Web Design
            </button>
            <button onClick={()=>setSelectedTab("Ux design")} className="text-slate-900 border border-solid border-slate-900 py-2 px-4 rounded-[8px] ">
              Ux design
            </button>
          </div>
        </div>
        <div className="flex items-center  gap-4 flex-wrap">
          {portfolios.slice(0, nextItems)?.map((portfolios, i) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="50"
              className=" group max-w-full sm:w-[40.50%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <img className="rounded-[8px]" src={portfolios.imgUrl} alt="" />

              <div className="w-full h-full bg-slate-400 bg-opacity-50 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button onClick={()=>showModelHandler(portfolios.id)} className="text-white bg-slate-500 hover:bg-slate-900 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full h-full flex items-center justify-center">
            {showLess ? (
              // "Show Less" button
              <button
                onClick={showLessHandler}
                className="text-white bg-slate-500 hover:bg-slate-900 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
              >
                Show Less
              </button>
            ) : (
              // "Load More" button
              <button
                onClick={loadMoreHandler}
                className="text-white bg-slate-500 hover:bg-slate-900 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      {
        showModel && <Model setShowModel={setShowModel} activeID={activeID} />
      }
    </section>
  );
}

export default Portfolios;
