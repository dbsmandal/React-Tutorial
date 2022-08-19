



function ClickEvent() {
    let data="Dipak Mandal";
    function Click()
    {
    data="Dbsmandal";
      alert(data);
    }

    function Submit(){
        data="somthing new"
        alert(data);
    }
    return (
      <div className="App">
       <h1>{data}</h1>
       <button onClick={Click}>Click Me</button>
       <br />
       <button onClick={Submit} >Click Me 1 </button>
      </div>
    );
  }
  
  export default ClickEvent;