import React from 'react'
import Header from './component/Header'
import Content from './component/Content'
import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
       <QueryClientProvider  client = {queryClient} >
      <Header />
      <Content />
      </QueryClientProvider>




    </div>
  );
}

export default App;
