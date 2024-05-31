import { useState, useEffect } from "react";
import { MoonLoader, ScaleLoader } from 'react-spinners';
import "./spinner.css";
import  useSpin  from "../Hooks/useSpin";



export default function Spinner() {
  const { loader , setloader } = useSpin();
  const [color, setColor] = useState("rgb(22,57,90)");

  useEffect(() => {
    setloader(true);
    if (loader) {
      setTimeout(() => {
        setloader(false);
      }, 2000);
    }
  }, [loader, setloader]);

  return (
    <div className="spinner-container">
      {loader ? (
        <div className="spinner-wrapper">
          <ScaleLoader
            color={color}
            loading={loader}
            height={100}
            width={10}
            radius={2}
            margin={4}
            aria-label="Loading Spinner"
            data-testid="loader"
     
          />
        </div>
      ) : null}
    </div>
  );
}
