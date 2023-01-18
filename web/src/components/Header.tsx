import { Plus } from "phosphor-react";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={Logo} alt="logo de habits" />

      <button
        type="button"
        className="border border-violet-500 font-semibold py-4 px-6 rounded-lg flex items-center gap-3 hover:border-violet-400"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
}
