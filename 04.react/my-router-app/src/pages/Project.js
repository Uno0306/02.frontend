import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

// const pjects = [
//   { id: 1, title: 'Project1', description: 'Explain Project1' },
//   { id: 2, title: 'Project2', description: 'Explain Project2' },
//   { id: 3, title: 'Project3', description: 'Explain Project3' },
// ];

function Project({ num }) {
  // an2.

  // an p2
  // const [num, setNum] = useState(0);
  const { projectNumber } = useParams();
  console.log(projectNumber);
  console.log(num);
  const [check, setCheck] = useState(num);

  // const { projectNumber } = useParams();
  // const [check, setCheck] = useState(true);

  // let i = 0;
  // an p2
  // const change = () => {
  //   setNum(projectNumber);
  //   setCheck(!check);
  //   // if (i === 1) {
  //   //   console.log(i);
  //   //   setCheck(false);
  //   // }
  // };

  // an2. start
  // useEffect(() => {
  //   change();
  //   // i++;
  //   // console.log(i);
  // }, []);
  // an2. end

  // const link = projectNumber ? '/projects/' + projectNumber : '/projects/1';
  // console.log(projectNumber);
  // const link = '/projects/' + projectNumber;
  //an p2
  // let url = `/projects/${num}`;

  // // an p3
  // let params = useParams();
  // console.log(params);
  // let projectNumber = params.projectNumber;
  // let seleted_project = {
  //   id: 0,
  //   title: 'Sorry',
  //   description: 'Not Found',
  // };
  // for (let i = 0; i < pjects.length; i++) {
  //   if (pjects[i].id === Number(projectNumber)) {
  //     seleted_project = pjects[i];
  //     break;
  //   }
  // }

  return (
    // an p1
    // <div>
    //   <h1>Project {projectNumber}</h1>
    //   <p>Home Page : Explain Project {projectNumber}</p>
    // </div>

    // an p2
    // <div>
    //   {check ? (
    // <li>
    //   <Link to={url} onClick={change}>
    //     Project {projectNumber}
    //   </Link>
    //   <button onClick={change}>클릭</button>
    // </li>

    //   ) : (
    //     <div>
    //       <h1>Project {projectNumber} </h1>
    //       <p>Home Page : Explain Project {projectNumber}</p>
    //     </div>
    //   )}
    // </div>

    // an p3
    // <div>
    //   <h1>{seleted_project.title}</h1>
    //   <p>{seleted_project.description}</p>
    // </div>

    <div>
      {check !== undefined ? (
        <li>
          <Link to={'/projects/' + num}>Project {projectNumber}</Link>
          <button>클릭</button>
        </li>
      ) : (
        <div>
          <h1>Project {projectNumber} </h1>
          <p>Home Page : Explain Project {projectNumber}</p>
        </div>
      )}
    </div>
  );
}

export default Project;
