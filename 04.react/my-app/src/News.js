import React from "react";
import Header from "./Header";
import Articles from "./Articles";

const News = () => {
    // console.log(company);
    return (
        <div className="news">
            {/* <Header company={company} setCompany={setCompany}></Header> */}
            <Header></Header>
            {/* <Articles company={company}></Articles> */}
            <Articles></Articles>
            {/* <Footer company={company}></Footer> */}
            
        </div>
    );
}

export default News; 

