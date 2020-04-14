import React, {useState} from 'react';
import Icon from "./components/icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty")

const App = () => {
  const [isCross, setisCross] = useState(true)
  const [winMessage, setwinMessage] = useState("")

  const reloadGame = () =>{
    setisCross(false);
    setwinMessage("");
    itemArray.fill("empty",0,9)
  }


  const checkIsWinner = () => {
    if(itemArray[0]===itemArray[1] && 
      itemArray[0]===itemArray[2]&&
      itemArray[0] !=="empty"){
        setwinMessage(`${itemArray[0]} wins` )
      }else if(        
      itemArray[3]===itemArray[4] && 
      itemArray[3]===itemArray[5]&&
      itemArray[3] !=="empty"){
        setwinMessage(`${itemArray[3]} wins` )
      }else if(
      itemArray[6]===itemArray[7] && 
      itemArray[6]===itemArray[8]&&
      itemArray[6] !=="empty"){
        setwinMessage(`${itemArray[6]} wins` )
      }else if(
        itemArray[0]===itemArray[3] && 
        itemArray[0]===itemArray[6]&&
        itemArray[0] !=="empty"){
          setwinMessage(`${itemArray[0]} wins` )
        }else if(
          itemArray[2]===itemArray[5] && 
          itemArray[2]===itemArray[8]&&
          itemArray[2] !=="empty"){
            setwinMessage(`${itemArray[2]} wins` )
          }else if(
            itemArray[1]===itemArray[4] && 
            itemArray[1]===itemArray[7]&&
            itemArray[1] !=="empty"){
              setwinMessage(`${itemArray[1]} wins` )
            }else if(
              itemArray[0]===itemArray[4] && 
              itemArray[0]===itemArray[8]&&
              itemArray[0] !=="empty"){
                setwinMessage(`${itemArray[0]} wins` )
              }else if(
                itemArray[2]===itemArray[4] && 
                itemArray[2]===itemArray[6]&&
                itemArray[2] !=="empty"){
                  setwinMessage(`${itemArray[2]} wins` )
                }
  }
  


  const changeItem = itemNumber => {

    if (winMessage) {
      return toast(winMessage,{type : "success"})
    }
    if (itemArray[itemNumber]==="empty") {
      itemArray[itemNumber]= isCross ? "Cross": "Circle"
      setisCross(!isCross)
    }else{
      return toast("Already Filled!!!!",{type: "error"})
    }
    checkIsWinner();
  }

  return (
    <div>

      <Container>
        <ToastContainer position = "bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2" >
                <h1 className="text-primary text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>
                Reload the game
              </Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "Cross": "Circle"} turn
              </h1>
            ) }
            <div className="grid">
              {itemArray.map((item,index)=>(
                <Card onClick={() => changeItem(index)} >
                  <CardBody className="box">

                    <Icon name={item}/>

                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
