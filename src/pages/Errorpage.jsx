import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
    <h1>Oops error occured.</h1>
    <button onClick={handleGoBack}>Go back</button>
    </>
  )
}

export default Errorpage
