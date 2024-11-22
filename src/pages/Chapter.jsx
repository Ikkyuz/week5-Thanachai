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
    <>
      <h1>เนื้อหาในบทเรียน</h1>
      <hr />
      {data.map((course) => (
        <CourseCard key={course.course_id} {...course} />
      ))}
    </>
  );
};

const CourseCard = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: 20, marginBottom: 10 }}>
      <div>{props.ch_title}</div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.ch_url}></iframe>
      <div>{props.ch_view}</div>
      <div>{props.ch_timetotal}</div>
      <div>
        <NavLink to="/">กลับไปหน้าแรก</NavLink>
      </div>
    </div>
  );
};

export default Chapter;
