import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Sample data for the table
const sampleData = [
  { id: 1, name: 'John Doe', age: 28, country: 'USA' },
  { id: 2, name: 'Jane Smith', age: 34, country: 'Canada' },
  { id: 3, name: 'Sam Green', age: 21, country: 'Australia' },
  { id: 4, name: 'Olivia Brown', age: 40, country: 'UK' },
  { id: 5, name: 'Liam Johnson', age: 25, country: 'USA' },
  { id: 6, name: 'Emma Davis', age: 29, country: 'Canada' },
];

// Search and filter component
const TableFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle change in search input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on search query
  const filteredData = sampleData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Table with Search Filter</h2>

      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search by name or country" 
        value={searchQuery} 
        onChange={handleSearchChange} 
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />

      {/* Table */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Render the TableFilter component
ReactDOM.render(
  <TableFilter />,
  document.getElementById('root')
);
