

export default function Contact()
{
  return (
    <>
      <div className='container-grid padding-large position-relative overflow-hidden'>
          <div className="container mt-5 p-3">
              <h3 className="display-7 text-center text-dark text-uppercase">Contact Us</h3>
              <p className="text-center"><em>We love our fans!</em></p>

              <div className="row">
                  <div className="col-md-4">
                      <p>Fan? Drop a note.</p>
                      <p><span className="glyphicon glyphicon-map-marker"></span> Salahuddin, Dubai, United Arab Emirates</p>
                      <p><span className="glyphicon glyphicon-phone"></span> Phone: +971 555 1169 45</p>
                      <p><span className="glyphicon glyphicon-envelope"></span> Email: junaidcoderz@gmail.com</p>
                  </div>
                  <div className="col-md-8">
                      <div className="row mt-3">
                          <div className="col-sm-12 form-group">
                              <input  className="form-control" name="name" placeholder="Name" type="text" />
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-sm-6 form-group">
                              <input  className="form-control" name="email" placeholder="Email" type="text"/>
                          </div>
                          <div className="col-sm-6 form-group">
                              <input  className="form-control" name="phone" placeholder="Phone" type="text"/>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-sm-12 form-group">
                              <input className="form-control" name="subject" placeholder="Subject" type="text"/>
                          </div>
                      </div>
                      <textarea className="form-control mt-3" name="comments" placeholder="Comment"></textarea>
                      <br/>
                      <div className="row">
                          <div className="col-md-12 form-group">
                              <button className="btn btn-medium btn-dark text-uppercase btn-rounded-none" type="button">Send</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
