import React from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import Project from './Project';

// an p3
const pjects = [
  { id: 1, title: 'Project1', description: 'Explain Project1' },
  { id: 2, title: 'Project2', description: 'Explain Project2' },
  { id: 3, title: 'Project3', description: 'Explain Project3' },
];

function Projects() {
  // an 1
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const x = searchParams.get('x');

  // an p3
  let projectTitleList = [];
  for (let i = 0; i < pjects.length; i++) {
    projectTitleList.push(
      <li key={pjects[i].id}>
        <Link to={'/projects/' + pjects[i].id}>{pjects[i].title}</Link>
      </li>
    );
  }

  return (
    // an 1
    // <div>
    //   <h1>
    //     Projects
    //     {/* {location.search} - {searchParams} - {x} */}
    //   </h1>
    //   <p>Home Page : Describe Projects</p>
    //   <ul>
    //     <li key={1}>
    //       <Link to='/projects/1'>
    //         Project 1<button>클릭</button>
    //       </Link>
    //     </li>
    //     <li key={2}>
    //       <Link to='/projects/2'>
    //         Project 2<button>클릭</button>
    //       </Link>
    //     </li>
    //     <li key={3}>
    //       <Link to='/projects/3'>
    //         Project 3<button>클릭</button>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>

    // //  an p2
    //   <div>
    //   <h1>
    //     Projects
    //     {/* {location.search} - {searchParams} - {x} */}
    //   </h1>
    //   <p>Home Page : Describe Projects</p>
    //   <ul>
    //     <Project id={1} />
    //     <Project id={2} />
    //     <Project id={3} />
    //     </li>
    //   </ul>
    // </div>

    // {/* //   an p3
    // // <div>
    // //   <h1>Projects</h1>
    // //   <ul>{projectTitleList}</ul>
    // //   <Routes>
    // //     <Route path='/projects/:projectNumber' element={<Project />}></Route>
    // //   </Routes>
    // // </div> */}

    // 하드 코딩 피하기
    <div>
      <h1>
        Projects
        {/* {location.search} - {searchParams} - {x} */}
      </h1>
      <p>Home Page : Describe Projects</p>
      <ul>
        <Project num={1} />
        <Project num={2} />
        <Project num={3} />
      </ul>
    </div>
  );
}

export default Projects;
