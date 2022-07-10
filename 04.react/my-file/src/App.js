import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState([]);

  // const list = async () =>
  //   await axios
  //     .get('http://localhost:8080/files')
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => console.log(error));

  // useEffect(() => {
  //   list();
  // }, []);

  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/file-list').then((response) => {
      setFiles(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <form
        method='post'
        action='http://localhost:8080/file-save'
        encType='multipart/form-data'
      >
        <input type='file' name='file' />
        <input type='submit' name='submit' />
      </form>
      {/* <div>
        {data.length !== 0 &&
          data.map((data) => {
            return (
              <div>
                <a href={`http://localhost:8080/file-download/${data.id}`}>
                  {data.originalFileName}
                </a>
              </div>
            );
          })}
      </div> */}

      <div>
        {files.length !== 0 &&
          files.map((file) => (
            <li key={file.id}>
              <a href={`http://localhost:8080/file-download/${file.id}`}>
                {file.originalFileName}{' '}
              </a>
            </li>
          ))}
      </div>
    </div>
  );
}

export default App;
