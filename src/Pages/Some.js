import React, { useEffect, useState } from "react";
import Projects from "./Projects";


const Some = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch("https://whispering-falls-57337.herokuapp.com/project")
      .then((res) => res.json())
      .then((json) => setDatas(json));
  });
  return (
    <div>
      <h2 className=" text-3xl text-primary text-center py-28">Projects</h2>
      <div className=" relative grid lg:grid-cols-4 gap-12 px-12  sm:grid-cols-1">
     {
        datas && datas.map(data => <Projects
        data={data}
        key={data._id}
        ></Projects>)
     }
    </div>
    </div>
  );
};

export default Some;
