import React from 'react';

const Testimonial = (props) => {
    return(
        <>
            <div className="mx-2 mx-md-5">
                <p>{props.comment}</p>
                <div className="card-body d-flex justify-content-bewtween align-items-center justify-content-center">
                    <img src={props.imgProfile} className="card-img-top testimonial_img mx-3" />
                    <div>
                        <b>Angelina Jolie</b>
                        <p className="text-muted">Designer at Colorlib</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;