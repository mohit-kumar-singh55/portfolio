import React from 'react';
import "./Page404.css";

function Page404() {
    return (
        <div className='page__container'>
            <div className="text-wrapper">
                <div className="title" data-content="404">
                    404
                </div>

                <div className="subtitle" data-content="Oops, the page you're looking for doesn't exist">
                    Oops, the page you're looking for doesn't exist.
                </div>
            </div>
        </div>
    )
}

export default Page404
