import React from 'react';
import './CardComponent.css';

function box(){
    return(
        <div className="box">
            <div className="box-header">
                <div className ="profilepic">1</div>
                <div className = "title-section"> <h2 className="title">Title goes here</h2>
                <p className="subtitle">Secondary Text</p>
                </div>
            </div>
            //main image 
            <div className="box-image">
                <div className="image-placeholder">5</div>
            </div>

            
            <p className="description">
                Greyhound divisively hello coldly wonderfully marginally far upon excluding
            </p>

          
            <div className="box-actions">
                <ActionButton text="ACTION 1" />
                <ActionButton text="ACTION 2" />
                <div className="icon">❤</div>
                <div className="icon">🔗</div>
            </div>




        </div>
    );
}
export default box;