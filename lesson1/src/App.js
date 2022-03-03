import {Button} from "./components";
import {Message} from "./components";

function App(props) {
  return (
    <div className="wrapper">
      
      <Message>
        {props.message}
      </Message>
      <Button theme={'error'}>btn1</Button>
      {/* <Text content={'lorem'}>
      </Text> */}

    </div>
  );
}

export default App;
