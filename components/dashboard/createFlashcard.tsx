export default function createFlashcard() {
  const sendReq = async () => {
    try {
      const message = "marvel";
      const data = await fetch("/api/generateCard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      console.log("it reached client");
      const { response } = await data.json();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button onClick={sendReq}>Send Request</button>
    </div>
  );
}
