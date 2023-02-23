import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import NewGroup from './components/NewGroup';

function App() {
  return (
    <div className="App">
      <h2>Study Groups</h2>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Upload new</Accordion.Header>
        <Accordion.Body>
          <NewGroup />
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Your groups</Accordion.Header>
          <Accordion.Body>
          
          </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default App;
