
import React from "react";

const Home = ()=>{
    return(
        <>
        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-md-6">
                    <h1 className="display-4 fe-bold">
                    Discover your style
                    </h1>

                    <p className="text-secoundar mt-3">
                        Welcome to Fashion Point, where modern style meets comfort. Explore our latest collection and find the perfect outfit for every occasion.
                    </p>

                    <button className="btn btn-dark btn-lg me-2">
                        Shop-now
                    </button>
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                    <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80" alt="Fashion Collection" className="img-fluid rounded shadow" />
                </div>
            </div>
        </section>

        <section className="conatiner pb-5">
            <div className="row text-center">
                
                <div className="col-md-4 mb-3">
                    <h4> Latest Trends</h4>
                <p className="text-secoundary">
                    Discover the latest fashion trends and styles.
                </p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home