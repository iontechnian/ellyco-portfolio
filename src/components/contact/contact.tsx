import { useState } from "react";
import Header from "../header";

const labelStyle = {
  color: "var(--text-color)",
  fontSize: "12px",
  marginBottom: "4px",
};
const inputClassName = "text-md p-2";
const inputStyle = {
  backgroundColor: "var(--tone-1-color)",
  color: "var(--text-color)",
};
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendCopy, setSendCopy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message, sendCopy });
  };

  return (
    <>
      <Header>Contact</Header>
      <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto">
        <div className="md:columns-2 md:gap-[36px]">
          <div className="flex flex-col">
            <label htmlFor="name" style={labelStyle}>
              Name:
            </label>
            <input
              className={inputClassName}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col mt-[14px] md:mt-0">
            <label htmlFor="email" style={labelStyle}>
              Email:
            </label>
            <input
              className={inputClassName}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
        <div className="flex flex-col mt-[14px]">
          <label htmlFor="message" style={labelStyle}>
            Message:
          </label>
          <textarea
            className={inputClassName + " mb-[36px]"}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sendCopy"
              className="mr-2 w-8 h-8 relative"
              checked={sendCopy}
              onChange={(e) => setSendCopy(e.target.checked)}
              style={{
                backgroundColor: "var(--tone-1-color)",
                appearance: "none",
                cursor: "pointer",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                display: sendCopy ? "block" : "none",
                marginLeft: "8px",
                color: "var(--text-color)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              ✓
            </div>
            <label htmlFor="sendCopy" style={{ color: "var(--text-color)" }}>
              Send me a copy of this message
            </label>
          </div>
          <button
            type="submit"
            className="py-3 px-10 font-bold cursor-pointer"
            style={{
              backgroundColor: "var(--blue-color)",
              color: "var(--base-color)",
            }}
          >
            SEND
          </button>
        </div>
      </form>
    </>
  );
}
