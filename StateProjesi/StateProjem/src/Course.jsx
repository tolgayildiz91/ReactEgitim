import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'
import './Course.css';

const courseMap = {
    Angular,
    Bootstrap5,
    Ccsharp:Ccsharp,
    Kompleweb:Kompleweb
}


function Course({courseName}) {
    console.log(courseName)
    return ( 
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]} alt="course"/>
        </div>
     );
}

export default Course;