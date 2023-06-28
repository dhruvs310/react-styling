import React from 'react'

function Website() {
  return (
   <header>
   <div className='container'>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#" style={{ color: 'white' }}>Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: "space-between" }}>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{ color: 'white' }} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ color: 'white' }}>
                                    <a className="dropdown-item" href="#" style={{ color: 'white' }}>Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" style={{ color: 'white' }}>Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" style={{ display: "flex" }}>
                            <input className="form-control mr-sm-2 me-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-light my-2 my-sm-0 me-3" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div>
                    <h1 style={{ color: 'black', fontSize: '60px' , marginTop: '5%', marginInlineStart: '25%' }}>Don't Miss amazing <br />grocery deals</h1>
                </div>
            </div>

            <div className="product">
                <h4 className='mt-5 ms-5    'style={{fontSize:'50px' }}>Order this product</h4>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-3" style={{padding:'10px',textAlign:'center'}}>
                            <img src="https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?size=626&ext=jpg&ga=GA1.1.721279199.1674823111&semt=ais" alt=""  width="200px" height="250px"/>
                            <h3 class="mt-3 " style={{color:'white'}}> Gujrati Thaali</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-3" style={{padding:'10px',textAlign:'center'}}>
                        <img src="https://t3.ftcdn.net/jpg/00/28/55/26/240_F_28552692_MHSMXWAIGcbnuKidt13wGczWOvrXwDd8.jpg" alt=""  width="200px" height="250px"/>
                            <h3 class="mt-3"  style={{color:'white'}}>Punjabi Thaali</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-3" style={{padding:'10px',textAlign:'center'}}>
                        <img src="https://t4.ftcdn.net/jpg/04/48/22/47/240_F_448224740_Co3QCqpK19ES62jbmSUsPOPX13g3i0l2.jpg" alt=""  width="200px" height="250px"/>
                            <h3 class="mt-3"  style={{color:'white'}}>South Thaali</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-3" style={{padding:'10px',textAlign:'center'}}>
                        <img src="https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78738.jpg?size=626&ext=jpg&ga=GA1.2.721279199.1674823111&semt=ais" alt=""  width="200px" height="250px"/>
                            <h3 class="mt-3"  style={{color:'white'}}>Rajsthani Thaali</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                       

                    </div>
                </div>
            </div>

        </div>
        </header>
  )
}

export default Website