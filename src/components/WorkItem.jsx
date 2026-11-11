import React from 'react';

function WorkItem({ title, description }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <div className="bg-light text-muted border rounded d-flex align-items-center justify-content-center mb-3" style={{height: "140px" }}>
                <span className="fs-4">Thumbnail</span>
            </div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text text text-secondary">{description}</p>
            </div>
        </div>
    );
}

export default WorkItem;
