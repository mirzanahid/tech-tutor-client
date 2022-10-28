import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
import SingleCourse from '../Shared/SingleCourse/SingleCourse';
import './Course.css'

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='course'> 
            <Container>
                <Row>
                    <Col xxl="3" xl="4" lg="4" md="5">
                        <div className="course-sidebar">
                            <h3 className='course-heading sub-heading2 text-color '>Course List</h3>
                              {
                                courses.map((course,idx)=><CourseList key={idx} course={course}></CourseList> )
                              }
                        </div>
                    </Col>
                    <Col xxl="9" xl="8" lg="8" md="7">
                        <div className="courses-container">
                            <h2 className='course-heading sub-heading2 text-color'>Chose Your Course</h2>
                            <div className="courses-main">
                                {
                                    courses.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;