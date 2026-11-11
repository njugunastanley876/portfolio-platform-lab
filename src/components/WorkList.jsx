import React from 'react';
import WorkItem from './WorkItem';

function WorkList({ works }) {
    return (
        <div className="row">
            {works.map((work) => (
                <div className="col-md-4 mb-4" key={work.id}>
                <WorkItem
                    title={work.title}
                    description={work.description}
                />
                </div>
            ))}
        </div>
    );
}

export default WorkList;
  