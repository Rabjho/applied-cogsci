import { useState } from "react";

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
  const [text, setText] = useState<string>(value || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTrigger(text);
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="">
          <textarea
            id="textarea"
            className="focus:shadow-outline w-full resize-none appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            rows={5}
            cols={50}
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
