import React, { Component } from 'react';
class Header extends Component {
    state = {
        loggedIn: false,
        userImg: "",
    }

    componentDidMount() {
        let object = JSON.parse(localStorage.getItem('userLoggedin'));
        if (!object.id) {
            this.setState({ loggedIn: false });
        } else {
            this.setState({ loggedIn: true, userImg: object.avatar });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <h4 className="alert-heading">
                        Sale 50%! <span className="badge badge-primary">All New Products</span>{" "}
                    </h4>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind
                        of content
                    </p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <nav className="navbar navbar-expand-xl navbar navbar-dark bg-dark text-white w-100 p-3">
                    <a className="navbar-brand" href="#">
                        NCT-JSI01
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Điện thoại
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Máy tính
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Phụ kiện điện tử
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Máy tính
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    {
                        this.state.loggedIn ? <img className="imgIcon" src={this.state.userImg} /> : <div className="text-end">
                            <button type="button" className="btn btn-outline-light mr-2">
                                Đăng nhập
                            </button>
                            <button type="button" className="btn btn-warning">
                                Đăng kí
                            </button>
                        </div>
                    }

                </nav>
            </div>
        );
    }
}

export default Header;