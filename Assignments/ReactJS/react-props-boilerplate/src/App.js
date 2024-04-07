import './App.css';
import BodyComponent from './components/BodyComponent';
import CommonComponent from './components/CommonComponent'
import HeaderComponent from './components/HeaderComponent';
function App() {
  return (
    <div className="App">
      <h1>learn react</h1>

      {/* Call HeaderComponent without any props */}
      <HeaderComponent/>

      {/* Call BodyComponent */}
      <BodyComponent/>

      {/* Call CommonComponent with prop value as text="This is a Footer Content" */}
      <CommonComponent text="This is a Footer Content"/>

      
    </div>
  );
}

export default App;
