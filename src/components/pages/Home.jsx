import '../css/App.css';
import Footer from '../layout/footer';
import Navbar from '../layout/navbar';
export default function Content(){
    return(
        <div>
            <Navbar/>

            <div className="Content1">
                    <div className="info"><br /><br />
                        <h1 className="h1">Hi, am Sam <br /><br /><span> a passionate full-stack developer <br />here to help you grow your
                        businness by providing interactive and responsive websites using HTML,CSS,Javascript,PHP,Node.js,
                        React.js,MongoDB and MYSQL together with problem solving skills.</span>
                        </h1>
                    </div>
                    <div className="img"></div>
                    
            </div>
            
            <div className="content2">
                <div className="div1">
                    <center><h1 className="headers">What i can offer ?</h1></center><br /><br />
                    <p className="headerpars">i can offer a very clean, interactive and resposive website for your business growth and development based on what you need 
                        and your expectations </p><br /><br />
                        <button className="div1-btn">let's talk</button>
                </div>
                <div className="div1">
                    <center><h1 className="headers">Experience</h1></center><br /><br />
                    <p className="headerpars">i can offer a very clean, interactive and resposive website for your business growth and development based on what you need 
                        and your expectations </p><br /><br />
                        <button className="div1-btn">let's talk</button>
                </div>
                <div className="div1">
                        <center><h1 className="headers">Security</h1></center><br /><br />
                        <p className="headerpars">i can offer a very clean, interactive and resposive website for your business growth and development based on what you need 
                            and your expectations </p><br /><br />
                            <button className="div1-btn">let's talk</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}