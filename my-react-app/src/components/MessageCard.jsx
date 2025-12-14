function MessageCard({ title, message }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
        width: "300px"
      }}
    >
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
