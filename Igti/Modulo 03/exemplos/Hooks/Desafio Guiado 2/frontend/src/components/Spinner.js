import React from 'react'
import css from "./spinner.module.css";

export default function Spinner({description}) {
  return ( <div className={css.flexrow}>
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
            <p style={{fontSize: "2rem", marginLeft: "10px"}}>{description}</p>
          </div> 
  )
}
