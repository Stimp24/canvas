import React from 'react';

const EditImage = ({ onClick, onChange }, props) => {


    return (
        <>
            <button className='btn-primary btn' onClick={onClick}> Upload Image</button>
            {/* <input
                type="file"
                onChange={onChange}
                style={{ display: 'none' }} /> */}
        </>
    )
}
export default EditImage