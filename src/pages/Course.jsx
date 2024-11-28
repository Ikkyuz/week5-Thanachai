import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/course");
    const data_format = await res.data.data;
    //เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };

  useEffect(() => {
    callApi();
    console.log(data);
  }, []);

  return (
    <div className="container mx-auto p-4 text-xl">
      <h1 className="text-3xl text-center font-bold p-4">Course</h1>
      {data.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 mx-auto max-w-xl">
      <div className="mb-4">
        <img src={props.picture} alt="" className="w-full object-cover rounded-md" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-700 text-sm mb-4">{props.detail}</p>
      <div className="mt-4">
        <NavLink to={'/course/'+props.id} className="text-blue-600 hover:text-blue-800 hover:underline flex justify-end">เนื้อหาเพิ่มเติม</NavLink>
      </div>
    </div>
  );
};

export default Course;
