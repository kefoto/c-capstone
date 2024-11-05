
import React from "react";

const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
    return (
      <div className="flex flex-row gap-2 cursor-pointer justify-between">
        <label htmlFor={htmlFor}>{label}</label>
        {children}
        {hasError && errorMessage ? 
          <p data-testid="error-message" className="text-sm text-red-500">{errorMessage}</p> : null}
      </div>
    );
  };
  
  export default FormField;