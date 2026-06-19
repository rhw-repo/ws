import "./index.css";

type AlertMessageProps = {
    // parentheses followed by their type followed by an arrow followed by their return 
    alertMessage: (message: string) => void
}

export default function AlertMessageCard ({alertMessage}: AlertMessageProps) {
    return (
        <div>
        <button onClick={() => alertMessage("Hi World")}>Click Me!</button>
        </div>
    )
}