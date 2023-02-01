import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* Product name, description, price */}
      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />
    </div>
  );
}

export default App;
