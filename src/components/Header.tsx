import LogoSvg from "../assets/logo.svg";
import logOutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between ">
      <img src={LogoSvg} alt="logo" className="my-8" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200 ">
          Olá, Estanler
        </span>
        <img
          src={logOutSvg}
          alt="ícone de sair"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
