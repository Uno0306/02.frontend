import React, { useState } from "react";

function Inputs() {
  // ver1
  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");

  // const changeName = (event) => {
  // 	console.log(event.target.value);
  // 	setName(event.target.value);
  // }

  // const changeNickName = (event) => {
  // 	console.log(event.target.value);
  // 	setNickName(event.target.value)
  // }
  // const resetInputs = () => {
  // 	setName("");
  // 	setNickName("");
  // }

  // ver2
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs;

  const changeInputs = (event) => {
    // console.log(event.target.name);
    // setInputs({name: event.target.value});

    // ver2
    // setName(event.target.name === "name"? event.target.value : "");
    // setNickName(nickName :event.target.name === "nickName"? event.target.value : "");

    // ver3
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInputs = () => {
    setInputs({
      name: "",
      nickName: "",
    });
  };

  return (
    <div>
      {/* ver 1*/}
      {/* <h1>이름: {name}</h1>
			<h1>닉네임: {nickName}</h1>

			<input type="text" placeholder="이름" onChange={changeName} value={name}/>
			<input type="text" placeholder="닉네임" onChange={changeNickName} value={nickName}/> */}

      {/* ver2 */}
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickName}</h1>

      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={changeInputs}
        value={name}
      />
      <input
        type="text"
        name="nickName"
        placeholder="닉네임"
        onChange={changeInputs}
        value={nickName}
      />
      <button onClick={resetInputs}>Reset</button>
    </div>
  );
}

export default Inputs;
