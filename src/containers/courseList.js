import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCourse} from "../actions/coursesAction"
class CoursesList extends Component {
    componentDidMount(){
        this.props.getCourse()
    }


    render() {
       
        return (
            <div>
                abc
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getCourse:()=>{
            dispatch(getCourse())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesList)