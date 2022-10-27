import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaBook, FaUsers, FaStar } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import './CourseDetails.css';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData()
    const { photo_url, instructor, price, ratings,id } = course;
    const { heading, description, topics, duration, lectures, enrolled, level, languages } = course.details;
    return (
        <div className='course-detail'>
            <Container >
                <Row className='d-flex justify-content-center'>
                    <Col lg='7' ref={ref}>
                        <div className="course-details-top">
                            <h2 className='course-details-heading text-color4'>{heading}</h2>
                            <div className="ratings details-ratings">
                                <p className='d-flex align-items-center'><FaStar className='star-icon text-color6' /><span className='text-color'>{ratings.star}({ratings.number})</span></p>
                            </div>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className='course-detail-pdf-btn bg-color text-color2' >Download PDF</button>}
                            </Pdf>

                        </div>
                        <div className="course-image">
                            <img className='course-details-img' src={photo_url} alt="" />
                        </div>
                        <div className="course-details-container">
                            <div className="course-description">
                                <h3 className='course-details-headers text-color4'>Course Description:</h3>
                                <p className='course-details-description text-color'>{description}</p>
                            </div>
                            <div className="course-topics">
                                <h4 className='course-details-headers text-color4'>What you'll learn:</h4>
                                <div className="course-topics-list text-color" dangerouslySetInnerHTML={{ __html: topics }} />

                            </div>
                            <div className="course-info ">
                                <Table striped className='course-info-table '>
                                    <tbody>
                                        <tr>
                                            <td>Price</td>
                                            <td>${price}</td>

                                        </tr>
                                        <tr>
                                            <td>Instructor</td>
                                            <td>{instructor.name}</td>

                                        </tr>
                                        <tr>
                                            <td>Duration</td>
                                            <td>{duration}</td>

                                        </tr>
                                        <tr>
                                            <td>Lessons</td>
                                            <td>{lectures}</td>
                                        </tr>
                                        <tr>
                                            <td>Enrolled</td>
                                            <td>{enrolled}</td>
                                        </tr>
                                        <tr>
                                            <td>Level</td>
                                            <td>{level}</td>
                                        </tr>
                                        <tr>
                                            <td>Languages</td>
                                            <td>{languages}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <Link to={`/premium-access/${id}`} className='premium-btn text-color3 bg-color'>Get premium access</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;