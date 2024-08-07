import React from "react";
import "./Loading.css"; // يمكنك إضافة تنسيقات CSS لمكون التحميل

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
