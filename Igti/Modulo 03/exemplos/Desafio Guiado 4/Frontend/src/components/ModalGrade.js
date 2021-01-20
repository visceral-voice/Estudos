import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import * as api from "../api/apiService";

Modal.setAppElement('#root');

export default function ModalGrade({selectedGrade, onSave, onClose}) {
  const {id, type, value, student, subject} = selectedGrade;
  const [ gradeValue, setGradeValue ] = useState(value);
  const [ gradeValidation, setGradeValidation ] = useState({});
  const [ errorMessage, setErrorMessage ] = useState("");

  useEffect(() => {
    const getValidation = async () => {
      const validation = await api.getValidationFromGradeType(type);
      setGradeValidation(validation);
    };
    getValidation();
  }, [type])

  useEffect(() => {
    const {minValue, maxValue} = gradeValidation;

    if (gradeValue < minValue || gradeValue > maxValue) {
      setErrorMessage(`O valor da nota deve estar entre ${minValue} e ${maxValue} (inclusive!)`);
      return;
    }
    setErrorMessage("");
  }, [gradeValue, gradeValidation])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  })

  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Escape"){
      onClose();
    }
    if (event.key === "Enter"){
      handleFormSubmit(event);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id: id,
      newGrade: gradeValue
    }
    onSave(formData);
  };

  const handleCloseClick = (event) => {
    onClose();
  };

  const handleChangeGradeValue = (event) => {
    setGradeValue(+event.target.value);
  };
  
  const handleSaveClick = (event) => {
    handleFormSubmit(event);
  };

  return ( <div>
              <Modal isOpen={true}>
                <div style={styles.flexRow}>
                  <span style={styles.centerTitle}>Manutenção de notas</span>
                  <button className="waves-effect waves-ligths btn red dark-4"
                          onClick={handleCloseClick}
                  >
                   X   
                  </button>
                </div>
              <form onSubmit={handleFormSubmit}>
                <div className="input-field">
                  <input id="inputStudent" value={student} type="text" readOnly />
                  <label className="active" htmlFor="inputStudent">Estudante</label>
                </div>
                <div className="input-field">
                  <input id="inputSubject" value={subject} type="text" readOnly />
                  <label className="active" htmlFor="inputSubject">Disciplina</label>
                </div>                
                <div className="input-field">
                  <input id="inputType" value={type} type="text" readOnly />
                  <label className="active" htmlFor="inputType">Tipo de avaliação</label>
                </div>                
                <div className="input-field">
                  <input id="inputGradeValue" 
                         value={gradeValue} 
                         type="number" 
                         min={gradeValidation.minValue}
                         max={gradeValidation.maxValue}
                         step="1"
                         autoFocus
                         onChange={handleChangeGradeValue}
                  />
                  <label className="active" htmlFor="inputGradeValue">Nota</label>
                </div>                                
              </form>
                <div style={styles.flexRow}>
                  <button className="waves-effect waves-ligths btn"
                          onClick={handleSaveClick}
                          disabled={errorMessage.trim() !== ""}
                    >
                    Salvar
                  </button>
                  <span style={styles.messageError}>{errorMessage}</span>
                </div>              
              </Modal>
           </div>
          
  );
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItens: "center",
    justifyContent: "space-between",
    margingBotton: "40px"
  },
  centerTitle: {
    fontWeight: "bold",
    fontSize: "1.3rem"
  },
  messageError: {
    color: "red",
    fontWeight: "bold"
  }
};