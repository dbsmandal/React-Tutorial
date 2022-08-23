import './App.css';
import UseEfectWithCondition from './Use Efect/UseEfectWithCondition';
import Main1 from './Use Efect/Main1';
import TableMap from './Array/TableMap';
import TableBoots from './Array/TableBoots';
function App() {
  return (
  <>
  <div>
    <UseEfectWithCondition/>
 </div>
<div>
<Main1/>
</div>
<div className="map">
  <TableMap/>
</div>
  <div>
    <TableBoots/>
  </div>
  </>
  );
}

export default App;
