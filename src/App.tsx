import { useRef } from "react";

const siteUrl = "http://localhost:5173/tick-tick-stat/";

function App() {
  const formRef = useRef(null);

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };
  return (
    <>
      <form
        ref={formRef}
        action="https://ticktick.com/oauth/authorize"
        method="POST"
        style={{ display: "none" }}
      >
        <input type="hidden" name="client_id" value={clientId} />
        <input type="hidden" name="scope" value="scope" />
        <input type="hidden" name="state" value="state" />
        <input type="hidden" name="redirect_uri" value={siteUrl} />
        <input type="hidden" name="response_type" value="code" />
      </form>

      <button onClick={handleSubmit}>Redirect via POST with parameters</button>
    </>
  );
}

export default App;
