import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

export default function Model({ children, className = "", open , onClose}) {
  const refModel = useRef();
    useEffect(() => {
    if (open) {
      refModel.current.showModal();
    } else {
      refModel.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={refModel} className={`modal ${className}`} onClose={onClose}>
      {children}{" "}
    </dialog>,
    document.getElementById("modal")
  );
}
