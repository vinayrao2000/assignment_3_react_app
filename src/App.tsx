import Alert from "./components/Alert";

function App() {
  const handleClose = () => {
    console.log("Alert closed");
  };

  return <Alert onClose={handleClose}>This is an alert message!</Alert>;
}

export default App;
