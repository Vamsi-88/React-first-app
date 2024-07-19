import { useState } from 'react';


function Home(){
    const [count,setCount] = useState(0);
    return(
        <>



        {/* <h1> ABC Automobiles</h1>
        <div className="counter">
            <h6>Counter : {count}</h6>
            <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
            <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
        </div> */}





        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://w0.peakpx.com/wallpaper/213/574/HD-wallpaper-tesla-s-auto-car-model-s-sedan-sports-car.jpg" class="d-block w-100" alt="..." height={700} ></img>
    </div>
    <div class="carousel-item">
      <img src="https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/93821/model-s-exterior-front-view.jpeg?q=80" class="d-block w-100" alt="..."   height={700}></img>
    </div>
    <div class="carousel-item">
      <img src="https://academy.education.investing.com/wp-content/uploads/2022/08/tesla-statistics.jpg" class="d-block w-100" alt="..."   height={700}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





{/* 

 */}




<div class="album py-5 bg-light" style={{backgroundColor:'black'}}>
  <div class="container" >

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" >
        <div class="card shadow-sm" style={{backgroundColor:'black'}}>
          <img src=" https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg" class="card-img-top" alt="Image description"/>
          <div class="card-body">
            <button type="button" class="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
      <div class="col"  >
        <div class="card shadow-sm" style={{backgroundColor:'black'}}>
          <img src= "  https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Tesla-Model-Y/6396/1552894185017/front-left-side-47.jpg" class="card-img-top" alt="Image description"/>
          <div class="card-body">
            <button type="button" class="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
      <div class="col" >
        <div class="card shadow-sm"  style={{backgroundColor:'black'}}>
          <img src= " https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Cybertruck/7236/1574859399554/front-left-side-47.jpg?imwidth=420&impolicy=resize" class="card-img-top" alt="Image description"/>
          <div class="card-body">
            <button type="button" class="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
      <div class="col" >
        <div class="card shadow-sm"  style={{backgroundColor:'black'}}>
          <img src=" https://hips.hearstapps.com/hmg-prod/images/2019-tesla-model3-lt-airporthero-low-101-1587061146.jpg" class="card-img-top" alt="Image description"/>
          <div class="card-body">
            <button type="button" class="btn btn-primary">View Details</button>
            
          </div>
        </div>
      </div>
      </div>
  </div>
</div>







{/*  */}








<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{backgroundColor:'black'}}>
  ABC Automobiles
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"><b>ABC</b></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><i>Our philosophy is simple: to create vehicles that are not just modes of transportation, but works of art that inspire and empower. Each ABC automobile is a testament to meticulous craftsmanship, cutting-edge technology, and an unwavering dedication to our customers.</i></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>




{/*  */}































 
        
        
        
        
        </>



    )
}
export default Home;