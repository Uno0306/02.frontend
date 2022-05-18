import React, { useContext} from "react";
import { UseContext1 } from "./UseContext1";
    
const Articles = () => {
    const{company} = useContext(UseContext1);

    return (
        <article 
        className="article"
        >
            <h3>{company}에 오신 것을 환영합니다</h3>
            <h4>\o/&nbsp;&nbsp;\o/&nbsp;&nbsp;\o/&nbsp;&nbsp;\o/&nbsp;&nbsp;
                \o/&nbsp;&nbsp;\o/&nbsp;&nbsp;\o/&nbsp;&nbsp;\o/</h4>

            
        </article>
    );
}

export default Articles; 