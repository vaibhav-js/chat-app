import React, { useState, createContext } from 'react';
import Container from "./components/Container"

const ConnectionContext = createContext({
  connection: null,
  updateChannel: () => {}
})

const ChannelContext = createContext({
  channel: null,
  updateChannel: () => {}
});

const App = () => {
  const [connection, setConection] = useState(null);
  const [channel, setChannel] = useState(null);
  const updateConnection = conn => {
    setConection(conn);
  }

  const updateChannel = chn => {
    setChannel(chn);
  }



  return (
    <ConnectionContext.Provider value={{ connection, updateConnection}}>
      <ChannelContext.Provider value={{ channel, updateChannel }}>
        <Container />
      </ChannelContext.Provider>
    </ConnectionContext.Provider>
  );
}

export const ConnectionConsumer = ConnectionContext.Consumer;
export const ChannelConsumer = ChannelContext.Consumer;
export default App;
