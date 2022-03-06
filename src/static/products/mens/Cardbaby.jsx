import React from 'react';

const Cardbaby = (props) => {
    return(
        <>
            <div className="card mx-2">
                <div class="card-body">
                    <img src={props.img} className="card-img-top w-50 mx-auto" />
                    <div className="card-text">{props.productName}</div>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <span className="price">{props.price}</span>
                        </div>
                        <div>
                            <span className="price text-decoration-line-through text-muted">{props.discountPrice}</span>
                        </div>
                        <div>
                            <div className="badge btn-warning">{props.offPrice}</div>
                        </div>
                        <div>
                            <a className="btn"><i className="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardbaby;