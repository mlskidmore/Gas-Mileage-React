import './App.css';
import AutomobileMenu from './components/AutomobileMenu'
import YearMenu from './components/YearMenu';
import MonthMenu from './components/MonthMenu';
import DayMenu from './components/DayMenu';
import Odometer from './components/Odometer';
import Trip from './components/Trip';
import Gallons from './components/Gallons';
import Cost from './components/Cost';


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import {Container, Row, Col, Form} from '../node_modules/reactstrap';
//import Button from '@restart/ui/esm/Button';
import { Button, Container, Form } from 'react-bootstrap';
//import { listen } from 'dom-helpers';

const App = () => {

  console.log("App ...");

  const automobiles = [
    { id: "A0", auto: "Automobile" },
    { id: "A1", auto: "1993 Honda Accord SE" },
    { id: "A2", auto: "2004 Subaru Outback" },
    { id: "A3", auto: "2006 BMW 330 Ci" }
  ];

  /*
  automobiles.forEach(function (id, auto) {
    console.log(id, auto);
  });
  */

  return (
    <div className="App">
      <header className="App-header">
        <Container >
          <Form className="form-group">

            <h2 className="col-3">
              Gas Mileage Entry Form
            </h2>

            <div className="col-3" >
              <AutomobileMenu title="Select automobile" autos={automobiles} ></AutomobileMenu>
            </div>

            <div className="col-3" >
              <YearMenu></YearMenu>
            </div>

            <div className="col-3">
              <MonthMenu></MonthMenu>
            </div>

            <div className="col-3">
              <DayMenu></DayMenu>
            </div>

            <div className="col-3">
              <Odometer></Odometer>
            </div>

            <div className="col-3">
              <Trip></Trip>
            </div>

            <div className="col-3">
              <Gallons></Gallons>
            </div>

            <div className="col-3">
              <Cost></Cost>
            </div>

            <div className="col-3">
              <Button>Save</Button>
            </div>
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
