import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css'

const CourseList = ({course}) => {
    return (
        <div>
            <Link className='course-list-item text-color7 '>{course.title}</Link>
        </div>
    );
};

export default CourseList;