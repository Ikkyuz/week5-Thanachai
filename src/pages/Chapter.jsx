import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Chapter = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    const data_format = await res.data.data;
    console.log(res);
    //เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };
  useEffect(() => {
    callApi();
    console.log(data);
  }, []);

  return (
    <div className="container mx-auto p-4 text-xl">
      <h1 className="text-3xl text-center font-bold p-4">เนื้อหาในบทเรียน</h1>
      {data.map((course) => (
        <CourseCard key={course.course_id} {...course} />
      ))}
    </div>
  );
};

const CourseCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">{props.ch_title}</h2>
      <iframe className="w-full aspect-video mb-4" src={"https://www.youtube.com/embed/" + props.ch_url} title={props.ch_title}></iframe>
      <div className="flex justify-between text-lg text-gray-600">
        <span>เวลารวม: {props.ch_timetotal}</span>
        <span>จำนวนวิว: {props.ch_view}</span>
      </div>
      <div className="mt-4">
        <NavLink to="/" className="text-blue-600 hover:text-blue-800 hover:underline">กลับไปหน้าแรก</NavLink>
      </div>
    </div>
  );
};

export default Chapter;
