
import React from "react";

const Footer =()=>{
    return(
        <>
        <footer className="bg-dark text-white mt-5">
            <div className="contanier">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h4>Fashion Point</h4>

                        <p className="text-secoundary">
                                Your destination for trendy, stylish, and affordable fashion.
                        </p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>

                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Contact</h5>
                        <p className="mb-1">fashionpoint@gmail.com</p>
                        <p className="mb-1">9876543210</p>
                    </div>
                </div>
                <hr />
                <p className=" text-center mb-0"> 2026 Fashion Point. All Rights Reserved.</p>
            </div>
        </footer>
        </>
    )
}

export default Footer