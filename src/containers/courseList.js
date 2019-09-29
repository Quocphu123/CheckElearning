import React, { Component } from 'react'
import { connect } from 'react-redux'

class CoursesList extends Component {



    render() {
       
        return (
            <div>
                abc
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesList)