import './App.css';
import ClickEvent from './ClickEvent10/ClickEvent';
import FunProps from './Props/FunProps';
import StateInFunCompo from './State/StateInFunCompo';
import UseStateClass from './State/UseStateClass';
import UseStateFun from './State/UseStateFun';
function App() {
  return (
  <><div>
    <ClickEvent/>
    </div>
  
  <br />
  <div className='function-state'> <StateInFunCompo/>
  <br />
  <UseStateFun/>
  <StateInFunCompo/>
  </div>
 <div className="classCompo-State">
<UseStateClass/>
 </div>
 <div className="props">
  <FunProps/>
 </div>

  
  </>
  );
}

export default App;
