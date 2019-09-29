import React, { Component } from 'react'
import CoursesList from '../../../containers/courseList'

export default class CourseList extends Component {
    render() {
        return (
            <div>
                <h2> POPULAR COURSES</h2>
                <CoursesList />
            </div>
        )
    }
}
