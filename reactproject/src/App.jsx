import { useState } from "react";
import "./App.css";

function App() {
  const nameSurname = "Tolga YILDIZ";
  const students = 43000;
  const dogruMu = true;
  const date = "date";
  const url = "https://picsum.photos/250/250";

  return (
    <>
      {/* <h1>İsim Soyisim</h1>
      <p>{nameSurname}</p>
      <p>Sayı : {students}</p>
      <p>Doğru Mu: {dogruMu}</p>
      <input type="text"/>

      {dogruMu ? <p>İsim Soyisim  {nameSurname}</p>  :<p> Yanlış Bilgi</p>}
     
      <input type={date}/>
      <img src={url} alt=""/> */}
      <div style={{
        backgroundColor:'red',
        width:'250px',
        height:'250px'
      }} class="box">

      </div>
    </>
  );
}

export default App;
