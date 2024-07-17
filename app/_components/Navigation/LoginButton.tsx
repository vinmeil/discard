import { FaRegUser } from "react-icons/fa6";

export function LoginButton() {
  return (
    <button className="h-full flex bg-purple-600 px-4 py-4 items-center justify-between gap-x-4 rounded-lg hover:bg-purple-400">
      <FaRegUser size={16} className="text-2xl text-white" />
      <span className="text-white">Login</span>
    </button>
  );
}
