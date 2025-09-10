import '../css/App.css';
import Navbar from '../layout/navbar';
export default function About(){
    return(
        <div className="About-body">
            <Navbar/><br /><br />
        <h1 className="title">Am a full-stack software developer </h1><br />
        <p className="introduction">interested in helping you generate a responsive software for your business for the pourpose of growing wider and also more simpler 
            i have a 1 year experience in frontend and backend development and looking foward to help clients grow financialy with software problem solving skills 
            and if you want to know more or being familiar with what i can do please visit my linkedin account on <a href="linkedin/in/NDAYIRAGIJE-SAMUEL-PRINCE">linkedin/in/NDAYIRAGIJE-SAMUEL-PRINCE</a> or my github 
            which is <a href="github.com/roransome">github.com/roransome</a>  please click on the button below to talk.
        </p><br /><br />
        <button className="talk">let's talk</button>
        </div>
    )
}