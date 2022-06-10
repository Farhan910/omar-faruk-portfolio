import React, { useEffect, useState } from "react";
import Projects from "./Projects";


const Some = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/project")
      .then((res) => res.json())
      .then((json) => setDatas(json));
  });
  return (
    <div className=" relative grid lg:grid-cols-3 gap-12 px-12  sm:grid-cols-1">
     {
        datas && datas.map(data => <Projects
        data={data}
        key={data._id}
        ></Projects>)
     }
    </div>
  );
};

export default Some;
