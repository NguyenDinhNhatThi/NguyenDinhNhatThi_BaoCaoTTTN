import React from "react";

const CategoryListView = () => (
  <section className="section-content padding-y">
    <div className="container">
      {/* ============================  FILTER TOP  ================================= */}
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2"> Your are here: </div> {/* col.// */}
            <nav className="col-md-8">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Category name</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Sub category</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Items
                </li>
              </ol>
            </nav>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
          <hr />
          <div className="row">
            <div className="col-md-2">Filter by</div> {/* col.// */}
            <div className="col-md-10">
              <ul className="list-inline">
                <li className="list-inline-item mr-3 dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {" "}
                    Supplier type{" "}
                  </a>
                  <div className="dropdown-menu p-3" style={{ maxWidth: 400 }}>
                    <label className="form-check">
                      <input
                        type="radio"
                        name="myfilter"
                        className="form-check-input"
                      />{" "}
                      Good supplier
                    </label>
                    <label className="form-check">
                      <input
                        type="radio"
                        name="myfilter"
                        className="form-check-input"
                      />{" "}
                      Best supplier
                    </label>
                    <label className="form-check">
                      <input
                        type="radio"
                        name="myfilter"
                        className="form-check-input"
                      />{" "}
                      New supplier
                    </label>
                  </div>{" "}
                  {/* dropdown-menu.// */}
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {" "}
                    Country{" "}
                  </a>
                  <div className="dropdown-menu p-3">
                    <label className="form-check">
                      {" "}
                      <input
                        type="checkbox"
                        className="form-check-input"
                      />{" "}
                      China{" "}
                    </label>
                    <label className="form-check">
                      {" "}
                      <input
                        type="checkbox"
                        className="form-check-input"
                      />{" "}
                      Japan{" "}
                    </label>
                    <label className="form-check">
                      {" "}
                      <input
                        type="checkbox"
                        className="form-check-input"
                      />{" "}
                      Uzbekistan
                    </label>
                    <label className="form-check">
                      {" "}
                      <input
                        type="checkbox"
                        className="form-check-input"
                      />{" "}
                      Russia{" "}
                    </label>
                  </div>{" "}
                  {/* dropdown-menu.// */}
                </li>
                <li className="list-inline-item mr-3 dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Feature
                  </a>
                  <div className="dropdown-menu">
                    <a href="" className="dropdown-item">
                      Anti backterial
                    </a>
                    <a href="" className="dropdown-item">
                      With buttons
                    </a>
                    <a href="" className="dropdown-item">
                      Extra safety
                    </a>
                  </div>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#">Color</a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#">Size</a>
                </li>
                <li className="list-inline-item mr-3">
                  <div className="form-inline">
                    <label className="mr-2">Price</label>
                    <input
                      className="form-control form-control-sm"
                      placeholder="Min"
                      type="number"
                    />
                    <span className="px-2"> - </span>
                    <input
                      className="form-control form-control-sm"
                      placeholder="Max"
                      type="number"
                    />
                    <button type="submit" className="btn btn-sm btn-light ml-2">
                      Ok
                    </button>
                  </div>
                </li>
                <li className="list-inline-item mr-3">
                  <label className="custom-control mt-1 custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <div className="custom-control-label">Ready to ship</div>
                  </label>
                </li>
              </ul>
            </div>{" "}
            {/* col.// */}
          </div>{" "}
          {/* row.// */}
        </div>{" "}
        {/* card-body .// */}
      </div>{" "}
      {/* card.// */}
      {/* ============================ FILTER TOP END.// ================================= */}
      <header className="mb-3">
        <div className="form-inline">
          <strong className="mr-md-auto">32 Items found </strong>
          <select className="mr-2 form-control">
            <option>Latest items</option>
            <option>Trending</option>
            <option>Most Popular</option>
            <option>Cheapest</option>
          </select>
          <div className="btn-group">
            <a
              href="/category/list"
              className="btn btn-light active"
              data-toggle="tooltip"
              title="List view"
            >
              <i className="fa fa-bars" />
            </a>
            <a
              href="/category/grid"
              className="btn btn-light"
              data-toggle="tooltip"
              title="Grid view"
            >
              <i className="fa fa-th" />
            </a>
          </div>
        </div>
      </header>
      {/* sect-heading */}
      <div className="row">
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <span className="badge badge-danger"> NEW </span>
              <img src={require("../../assets/images/items/1.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Hot sale unisex New Design Shirt for sport polo shirts latest
                design
              </a>
              <div className="price-wrap">
                <span className="price">$32.00-$40.00</span>
                <small className="text-muted">/per item</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 2 Years </span>
                <span className="tag"> 23 reviews </span>
                <span className="tag"> Japan </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/2.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                High Quality Winter PU Rain Jacket with Padding for Men's
                outdoor
              </a>
              <div className="price-wrap">
                <span className="price">$50.00-$75.00</span>
                <small className="text-muted">/per item</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                4 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Great manufacturer Co ltd.</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 3 Years </span>
                <span className="tag"> 70 reviews </span>
                <span className="tag"> Russia </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/3.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$425.00-$490.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Best textile company Ltd.</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 7 Years </span>
                <span className="tag"> 34 reviews </span>
                <span className="tag"> Russia </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/4.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/5.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/6.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/15.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Pro Electronic Ltd</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={require("../../assets/images/items/1.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <span className="badge badge-danger"> NEW </span>
              <img src={require("../../assets/images/items/2.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <span className="badge badge-danger"> NEW </span>
              <img src={require("../../assets/images/items/3.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <span className="badge badge-danger"> NEW </span>
              <img src={require("../../assets/images/items/4.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <span className="badge badge-danger"> NEW </span>
              <img src={require("../../assets/images/items/1.jpg")} />
            </div>{" "}
            {/* img-wrap.// */}
            <figcaption className="info-wrap">
              <a href="#" className="title mb-2">
                Cheap and Best demo clothe with latest Fashion styles for Men
              </a>
              <div className="price-wrap">
                <span className="price">$325.00-$390.00</span>
                <small className="text-muted">/per bag</small>
              </div>{" "}
              {/* price-wrap.// */}
              <p className="mb-2">
                {" "}
                2 Pieces <small className="text-muted">(Min Order)</small>
              </p>
              <p className="text-muted ">Guangzhou Yichuang Electronic Co</p>
              <hr />
              <p className="mb-3">
                <span className="tag">
                  {" "}
                  <i className="fa fa-check" /> Verified
                </span>
                <span className="tag"> 4 Years </span>
                <span className="tag"> 60 reviews </span>
                <span className="tag"> China </span>
              </p>
              <label className="custom-control mb-3 custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <div className="custom-control-label">Add to compare</div>
              </label>
              <a href="#" className="btn btn-outline-primary">
                {" "}
                <i className="fa fa-envelope" /> Contact supplier{" "}
              </a>
            </figcaption>
          </figure>
        </div>{" "}
        {/* col.// */}
      </div>{" "}
      {/* row end.// */}
      <nav className="mb-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div className="box text-center">
        <p>Did you find what you were looking for？</p>
        <a href="" className="btn btn-light">
          Yes
        </a>
        <a href="" className="btn btn-light">
          No
        </a>
      </div>
    </div>{" "}
    {/* container .//  */}
  </section>
);

export default CategoryListView;
