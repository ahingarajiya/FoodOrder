import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

export default function Model({ children, className = "", open }) {
  console.log("model commponat");

  const refModel = useRef();
    useEffect(() => {
    if (open) {
      // If 'open' is true, show the dialog
      refModel.current.showModal();
    } else {
      // If 'open' is false, close the dialog
      refModel.current.close();
    }
  }, [open]); // Dependency on 'open' prop

  return createPortal(
    <dialog ref={refModel} className={`modal ${className}` }>
      {children}{" "}
    </dialog>,
    document.getElementById("modal")
  );
}
