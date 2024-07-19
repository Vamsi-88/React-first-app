import {Component} from 'react';


class About extends Component{
 
    render(){
     
        return (























            <div data-testid="about-content"    style={{backgroundColor:'black'}} >

                <div className="container col-xxl-8 px-4 py-5" >
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://www.beev.co/wp-content/uploads/2022/05/tesla-voiture-1024x576.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6" style={{color:'white'}}>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
        <p className="lead">ABC Automobiles is a visionary automotive company, pioneering a new era of sustainable and exhilarating driving experiences. With a relentless pursuit of innovation, ABC is dedicated to creating vehicles that not only redefine performance but also harmonize with the environment.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>






  <div className="row row-cols-1 row-cols-md-3 g-4" data-testid="about-content">
  <div className="col">
    <div className="card h-100">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Tesla Model S</h5>
        <p className="card-text">Sedan: Sleek, high-performance electric sedan.
Luxury focus: Premium interior, advanced technology.
Long range: Impressive driving distance on a single charge..</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 0 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Tesla-Model-Y/6396/1552894185017/front-left-side-47.jpg" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Tesla Model Y</h5>
        <p className="card-text">SUV: Electric crossover with spacious interior.
Practicality: Combines SUV utility with sedan performance.
Popular choice: Best-selling electric vehicle globally..</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 0 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Cybertruck/7236/1574859399554/front-left-side-47.jpg?imwidth=420&impolicy=resize" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Tesla Cybertruck</h5>
        <p className="card-text">Pickup truck: Bold, futuristic design with stainless steel body.
Off-road capability: Built for rugged terrain and heavy loads.
Electric power: High performance and long range expected..</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 0 mins ago</small>
      </div>
    </div>
  </div>
</div>
            </div>




















        

          
        )
    }
}
export default About;

