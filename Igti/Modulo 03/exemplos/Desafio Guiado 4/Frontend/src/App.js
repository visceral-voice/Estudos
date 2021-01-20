import React, { useEffect, useState } from 'react';
import * as api from "./api/apiService";
import GradesControl from './components/GradesControl';
import ModalGrade from './components/ModalGrade';
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

  const handleDeleteGrade = async (deletedGrade) => {
    const deleted = await api.deleteGrade(deletedGrade);

    if (deleted) {
      const deletedIndex = allGrades.findIndex(grade => grade.id === deletedGrade.id);
      const newGrades = Object.assign([], allGrades);
      newGrades[deletedIndex].isDeleted = true;
      newGrades[deletedIndex].value = 0;
      setAllGrades(newGrades);
    }
  };

  const handleSaveGrade = async (formData) => {
    const {id, newGrade} = formData;
    let actionGrade = allGrades.find(grade => grade.id === id);
    actionGrade.value = newGrade;

    let savedGrade = {};

    if (actionGrade.isDeleted){
      savedGrade =  await api.insertGrade(actionGrade);
    } else {
      savedGrade =  await api.updateGrade(actionGrade);
    }
    actionGrade.isDeleted = false;
    const newGrades = Object.assign([], allGrades);
    setAllGrades(newGrades);
    handleClose();
  };

  const handleClose = () =>{
    setIsModalOpen(false);
  };

  const handlePersistGrade = (grade) => {
    setSelectedGrade(grade);
    setIsModalOpen(true);
  };
  return <div>
          <h1 className="center">Controle de notas</h1>
          {allGrades.length > 0 && <GradesControl 
                                      grades={allGrades}
                                      onDelete={handleDeleteGrade}
                                      onPersist={handlePersistGrade}
                                   />}
          {allGrades.length === 0 && <Spinner />}
          {isModalOpen && <ModalGrade
                            selectedGrade={selectedGrade}
                            onSave={handleSaveGrade}
                            onClose={handleClose}
                          />}
        </div>;
}
