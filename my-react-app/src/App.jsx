import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <MessageCard
        title="Welcome"
        message="This is your first reusable React component."
      />

      <MessageCard
        title="Props Power"
        message="Same component, different data using props."
      />

      <MessageCard
        title="Good Practice"
        message="Reusable components reduce duplicate code."
      />

      <MessageCard
        title="Interview Tip"
        message="Always explain props clearly in interviews."
      />
    </div>
  );
}

export default App;
