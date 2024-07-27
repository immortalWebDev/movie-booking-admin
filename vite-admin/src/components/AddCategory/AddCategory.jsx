import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './AddCategory.css'; 

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await addDoc(collection(db, 'categories'), { name: category });
      setCategory('');
      // setLoading(false)
      alert('Category added successfully');
      
    } catch (error) {
      console.error('Error adding category: ', error);
      alert('Error adding category');
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="add-category-container">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:{" "}
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <button type="submit">{loading ? "Adding Category..." : "Add Category"}</button>
      </form>
    </div>
  );
};

export default AddCategory;




