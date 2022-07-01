import React, { useContext } from "react";
import { UseContext1 } from "./UseContext1";

const Header = () => {
  // console.log(company);
  // const data = useContext(UseContext1);
  // console.log(UseContext1);
  // const{company, setCompany} = useContext(UseContext1);
  // const{style, setStyle} = useContext(UseContext1)
  const { company, setCompany, bool, setBool } = useContext(UseContext1);

  console.log(company);
  const valueChange = () => {
    // if(company === "메뚜기 월드"){
    //     setCompany("Locust World");
    // }else{
    //     setCompany("메뚜기 월드");
    // }

    company === "메뚜기 월드"
      ? setCompany("Locust World")
      : setCompany("메뚜기 월드");
  };

  // const lightStyle = {
  //     color: "black",
  //     background: "white"
  // };
  // const darkStyle = {
  //     color: "green",
  //     background: "black"
  // };
  // const [real, setReal] = useState({color: "green",background: "black"});

  //   console.log(bool);
  //   console.log(real);
  // const colorChange = () => {
  //     if(bool === true){
  //         setReal(lightStyle);
  //         setBool(false);
  //     }else {
  //         setReal(darkStyle);
  //         setBool(true);
  //     }
  // };
  const colorChange = () => {
    setBool(!bool);
  };

  // console.log(real);

  return (
    <header
      className="header"
      // style={real}
      style={{
        color: bool ? "black" : "lightgreen",
        background: bool ? "white" : "black"
      }}
    >
      {/* <button onClick={colorChange}>아잉</button> */}
      <button
        onClick={colorChange}
        style={{
          color: bool ? "red" : "white",
          background: bool ? "white" : "black",
          border: bool ? "5px solid lightgreen" : "5px solid white"
        }}
      >
        색 변환
      </button>
      <h1>{company} New Devs</h1>
      <button onClick={valueChange}>영/한 변환</button>
    </header>
  );
};

export default Header;
