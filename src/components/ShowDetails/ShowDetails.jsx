import React from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {

    const {bookID} = useParams();
    console.log(bookID);

    return (
        <div>
            <h2>this is for show details</h2>
        </div>
    );
};

export default ShowDetails;