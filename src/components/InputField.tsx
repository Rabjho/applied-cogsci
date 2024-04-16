import { useEffect } from "react";

interface InputFieldProps {
  placeholder?: string;
  value?: string;
  onTrigger: (answer: string) => void;
}

export default function InputField({
  placeholder = "",
  value = "",
  onTrigger,
}: InputFieldProps) {
  // Get value of input field and send to onTrigger, when button is clicked
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
    onTrigger((document.getElementById("text") as HTMLTextAreaElement).value);
  }

  useEffect(() => {
    // UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
    (document.getElementById("text") as HTMLTextAreaElement).value = value;
  }, [value]);

  return (
    <div className="vertical center-h h-2/3 w-2/3 bg-slate-200 p-2">
      <textarea
        placeholder={placeholder}
        id="text"
        className="overflow-wrap m-2 h-full w-full break-words bg-white p-2"
      />
      <button
        onClick={handleClick}
        className="m-2 h-auto w-full bg-blue-500 p-2"
      >
        Next
      </button>
    </div>
  );
}
