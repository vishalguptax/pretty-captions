import logo from "../assets/logo2.png";
const nav = () => {
  return (
    <nav className="py-6">
      <img
        src={logo}
        alt="Pretty Caption"
        className="logo w-52 sm:w-64 lg:w-72"
      />
    </nav>
  );
}

export default nav