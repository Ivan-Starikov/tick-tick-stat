function App() {
  const authInTT = () => {
    window.location.href = "http://localhost:8080/ttAuth";
  };

  return <button onClick={authInTT}>Click to Tick Tick Auth</button>;
}

export default App;
