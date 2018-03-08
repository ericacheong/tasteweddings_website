import React from 'react';

import photoGrid from '../../assets/images/photo.jpeg';
import './Photo.css';

const photo = (props) => {
    return (
        <section className="Photo" id="photo">
            <img src={photoGrid} alt="Gallery" />
        </section>
    );
}

export default photo;