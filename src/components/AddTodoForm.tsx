import { useState } from "react"

interface AddTodoFormProps{
    onSubmit: (title:string) => void;
}

export default function AddTodoForm({onSubmit}:AddTodoFormProps) {
    
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!input.trim()) return;

        onSubmit(input)
        setInput("");
    }

    return(
        <form className="rounded-s-md flex" onSubmit={handleSubmit}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
            className="rounded-s-md p-2 grow border border-gray-400"
            />
            <button
            type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                add
            </button>
        </form>
    )
}