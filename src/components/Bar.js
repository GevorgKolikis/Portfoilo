import React from 'react';

const Bar = ({ value: { icon, name, level } }) => {
    const bar_width = `${level}%`
    return (
        <div className="bar">
            <div className="bar-wrapper" style={{
                'width': bar_width
            }}>
                <span className="bar-name">
                    <img src={icon} alt="icon" className="bar-icon mr-2" />{name}
                </span>

            </div>

        </div>
    );
};

export default Bar;