import React from 'react';

const NewsCard = (props) => {
    return(
        <>
            <div className="card mx-2 border-0">
                <div class="card-body p-0">
                    <img src={props.news_image} className="card-img-top" />
                    <div className="my-2 d-flex flex-column text-start">
                        <div className="card-text h5">{props.news_heading}</div>
                        <p className="text-muted">{props.news_text}</p>
                    </div>
                </div>
                <div className="card-footer px-0">
                    <div className="d-flex justify-content-start">                        
                        <div>
                            <a href='#'>Read More...</a>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default NewsCard;