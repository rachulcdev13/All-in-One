import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Material = () => {
  return (
    <React.Fragment>
      <h2 className='text-center mt-5 mb-5'>Welcome to world...!!</h2>

      <div className="container">
        <div className="row">

        <div class="card col-sm">
          <img src="https://picsum.photos/id/1/200/150" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="google.com" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card  col-sm">
          <img src="https://picsum.photos/id/1/200/150" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="google.com" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card  col-sm">
          <img src="https://picsum.photos/id/1/200/150" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="google.com" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      
        </div>
      </div>
    </React.Fragment >
  );
}
export default Material;