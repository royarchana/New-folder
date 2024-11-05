import React from 'react';
import './main.css';

function box(){
    return(
        <div class="box">
            <div class ="box-header">
                <div class ="profilepic">1</div>
                <div class = "title-section"> <h2 class="title">Title goes here</h2>
                <p class="subtitle">Secondary Text</p>
                </div>
            </div>
            //main image 
            <div class="box-image">
                <div class="image-placeholder">5</div>
            </div>

            {/* Description text */}
            <p class="description">
                Greyhound divisively hello coldly wonderfully marginally far upon excluding
            </p>

            {/* Action buttons */}
            <div class="box-actions">
                <ActionButton text="ACTION 1" />
                <ActionButton text="ACTION 2" />
                <div class="icon">❤</div>
                <div class="icon">🔗</div>
            </div>




        </div>
    );
}
export default box;