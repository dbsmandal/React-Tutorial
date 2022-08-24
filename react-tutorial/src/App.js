import './App.css';
import UseEfectWithCondition from './Use Efect/UseEfectWithCondition';
import Main1 from './Use Efect/Main1';
import TableMap from './Array/TableMap';
import TableBoots from './Array/TableBoots';
import NestedArray from './Array/NestedArray';
import ReactFragment from './ReactFragment/ReactFragment';
import Parent from './Lifitng_State_Up/Parent';
import User1 from './Pure Component/User1';
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
  <div>
    <NestedArray/>
  </div>
  <div>
    <ReactFragment/>
  </div>
  <div>
  <Parent/>
  </div>
  <div>
<User1/>
  </div>
  </>
  );
}

export default App;
