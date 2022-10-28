import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css'

const CourseList = ({course}) => {
    return (
        <div>
            <Link className='course-list-item sub-heading text-color8 ' to={`/courses/${course.id}`}>{course.title}</Link>
        </div>
    );
};

export default CourseList;