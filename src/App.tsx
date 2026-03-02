const TICK_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = "http://localhost:5173/";
const SCOPE = 'tasks:write tasks:read'

function App() {
  const handleSubmit = () => {
    const state = crypto.randomUUID();

    const authUrl = `https://ticktick.com/oauth/authorize?` +
        `response_type=code` +
        `&client_id=${TICK_CLIENT_ID}` +
        `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
        `&scope=${encodeURIComponent(SCOPE)}` +
        `&state=${state}`;

    window.location.href = authUrl;
  };
  return (
    <>
      <button onClick={handleSubmit}>Redirect via POST with parameters</button>
    </>
  );
}

export default App;
