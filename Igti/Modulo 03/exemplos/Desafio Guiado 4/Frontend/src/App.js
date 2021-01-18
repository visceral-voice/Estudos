import React, { useEffect, useState } from 'react';
import * as api from "./api/apiService";
import GradesControl from './components/GradesControl';
import Spinner from './components/Spinner';

export default function App() {
  const [ allGrades, setAllGrades ] = useState([]);
  const [ selectedGrade, setSelectedGrade ] = useState({});
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 2000);
    };
    getGrades();
  }, []);

  const handleDeleteGrade = () => {
    console.log("handleDeleteGrade");
  };

  const handlePersistGrade = () => {
    console.log("handlePersistGrade");
  };
  return <div>
          <h1 className="center">Controle de notas</h1>
          {allGrades.length > 0 && <GradesControl 
                                      grades={allGrades}
                                      onDelete={handleDeleteGrade}
                                      onPersist={handlePersistGrade}
                                   />}
          {allGrades.length === 0 && <Spinner />}
        </div>;
}
