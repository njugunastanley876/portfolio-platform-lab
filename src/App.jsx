import React, { useState } from 'react';
import { initialProjects } from './data/initialProjects';
import WorkList from './components/WorkList';
import WorkForm from './components/WorkForm';
import SearchFilter from './components/SearchFilter';

function App() {
  const [works, setWorks] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

const handleAddProject = (newProject) => {
  setWorks([newProject, ...works]);
};
const filteredWorks = works.filter((work) =>
  work.title.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
  <div className="container py-5">
    <h1 className="text-center mb-5 fw-bold text-primary">My Portifolio platform</h1>

    <WorkForm onAddProject={handleAddProject} />

    <SearchFilter searchQuery={searchQuery} onSearchChange={setSearchQuery} />

    <WorkList works={filteredWorks} />
  </div>
);

}
export default App;








