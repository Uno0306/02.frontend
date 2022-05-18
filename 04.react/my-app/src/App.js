// import logo from './logo.svg';
import './App.css';
import {useState } from 'react';
// import Hello from "./Hello.js"
// import View from "./View"
// import UseState1 from './UseState1';
// import UseState2 from './UseState2';
// import Parent from './Parent';
// import Child from './Child';
// import UseEffect1 from './useEffect1';
// import UseEffect2 from './UseEffect2';
// import UseRef1 from './UseRef1';
// import UseRef2 from './UseRef2';
// import UseRef3 from './UseRef3';
// import Header from './Header';
// import Articles from './Articles';
import News from './News';
import {UseContext1}  from './UseContext1';



function App() {
  // const title = "React";

  // const basicStyle = {
  //   color: "blue",
  //   fontSize: "40px"
  // }
  
  // const [work, setWork] = useState(false);
  // const [previousState,setState] = useState(false)
  // const changeImportant = () =>{
  //   setState(true);
  // };
  
  
  const [company, setCompany] = useState("메뚜기 월드");

  
  // console.log(lightStyle);
  const [bool, setBool] = useState(true);

  return (
    // <div className="App">
    //     {/* 주석 */}
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React!
    //     </a>
    //   </header> */}
    // </div>
    
    
      // {/* <View>
      //   <Hello name="react" color="red"></Hello>
      //   <Hello color="yellowgreen" important={true}>{title}</Hello>
      // </View> */}
      // <div className="App">
      
    //     {/* 부모 - 자식 데이터 전달 */}
    //     {/* <Parent>
    //       {/* <Child></Child> *-/}
    //     </Parent> */}
    //  {/* </div> */}
      
            // {/* <UseState1/> */}
            // {/* <UseState2/> */}
      
            
            // {/* <div className="item"></div>
            // <div style={basicStyle}>{title}</div> */}
      
    <div 
      className='App'
      style={{
        color: bool? "black" : "lightgreen",
        background: bool?  "white" : "black"
      }}
    >

      {/* version1 */}
        {/* <UseEffect1></UseEffect1> */}
        {/* {true? "" : <UseEffect2/>} */}
        {/* {work && <UseEffect2/>} */}
        
        {/* work 버튼을 클릭했을 때 ---> 
            1) "작업 중 콘솔 보기"가 출력되면서
            2) 작업이 실행되도록 */}
        {/* <button onClick={() => {setWork(!work);}} >work</button> */}

      {/* version2 */}
      {/* <UseEffect2 state={previousState}/>

      <button onClick={changeImportant}>work</button> */}

      {/* <UseRef1></UseRef1> */}
      {/* <UseRef2></UseRef2> */}
      {/* <UseRef3></UseRef3> */}


      {/* <News 
        company={company}
        setCompany={setCompany}
      >

      </News> */}

      <UseContext1.Provider value={{company ,setCompany ,bool, setBool}}>
        <News></News>
      </UseContext1.Provider>
      
    </div>
      
  );
};

export default App;
