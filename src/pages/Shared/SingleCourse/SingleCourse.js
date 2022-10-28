import React from 'react';
import './SingleCourse.css';
import { FaBook, FaUsers, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { title, thumbnail_url, instructor, ratings, price, details, id } = course;
    const { description, lectures, enrolled } = details;
    return (
        <div className='course-card'>
            <div className="card-image">
                <img src={thumbnail_url} alt="" />
            </div>
            <div className="card-info">

                <div className="card-info-top">
                    <div className="instructor">
                        <img src={instructor.img} alt="" />
                        <p className='text-color'>{instructor.name}</p>
                    </div>
                    <div className="price">
                        <p className='course-price bg-color text-color2'>${price}</p>
                    </div>

                </div>
                <div className="course-info">
                    <h4 className='text-color'>{title}</h4>
                    <p className='text-color'>{description.length > 110 ? description.slice(0, 110) + '...' : description}</p>
                </div>
                <div className="course-bottom">
                    <div className="lessons">
                        <p className='text-color d-flex align-items-center'><FaBook className='lessons-icons  text-color5' /> {lectures} Lessons </p>
                    </div>
                    <div className="enrollment">
                        <p className='text-color d-flex align-items-center'><FaUsers className='lessons-icons text-color5' /> {enrolled} Enrolled</p>
                    </div>

                </div>
                <div className="ratings">
                    <p className='d-flex align-items-center'><FaStar className='star-icon text-color6' /><span className='text-color'>{ratings.star}</span></p>

                </div>
                <Link className='course-details-btn secondary-button' to={`/courses/${id}`}>View Details</Link>

            </div>

        </div>
    );
};

export default SingleCourse;