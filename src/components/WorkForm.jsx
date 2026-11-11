import React, { useState } from 'react';

function WorkForm({ onAddProject }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;

        const newProject = {
            id:  Date.now(),
            title,
            description,
        };

        onAddProject(newProject);
        setTitle('');
        setDescription('')
    };
    return (
        <div className="card shadow-sm p-4 mb-5">
            <h3 className="mb-3 text-secondary">Add New Project</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">project Title</label>
                    <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">project Description</label>
                    <textarea
                    className="form-control"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Addproject</button>
            </form>
        </div>
    );
}

export default WorkForm;