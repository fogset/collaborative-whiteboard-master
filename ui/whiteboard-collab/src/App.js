import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Container from './components/container/Container';

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [info, setInfo] = useState("");
  let socket;



  function joinRoom() {
    if (username !== "" && room !== "") {
      //socket = io.connect("http://localhost:5000");
      //socket.emit("join_room", room);
      //socket.emit(room, "data from client")
      //setShowChat(true);
      //setRoom(room);
      // socket.on(tempRoom, (data) => {
      //   console.log(`test data is: ${data}}`);
      //   setInfo(data);
      // });
    }
  };

  return (
    <div className="App">
      {/* <h3>Join A Chat</h3> */}
      <input
        type="text"
        placeholder="John..."
        onChange={(event) => { setUsername(event.target.value); }}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => { setRoom(event.target.value); }}
      />
      <button onClick={joinRoom}>Join A Room</button>
      <Container />
    </div>

    //<Container />
  );
}

export default App;
