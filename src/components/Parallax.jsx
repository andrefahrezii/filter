import React from 'react';

const Parallax = ({ children, image }) => {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', minHeight: '100vh' }}>
            {children}
        </div>
    );
};

export default Parallax;
