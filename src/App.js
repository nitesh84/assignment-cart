
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Cart from "./Cart";
import Header from "./Header";
import store from "./utils/store";
import Bill from "./Bill";




function App() {
  return (
   <Provider store={store}> 
      <Header />
      <Body />
   </Provider>
  );
}

export const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:"/cart",
    element:<Provider store={store}> <Cart /></Provider>
  },
  {
    path:'/bill',
    element: <Provider store={store} ><Bill /></Provider>
  }
])





export default App;
