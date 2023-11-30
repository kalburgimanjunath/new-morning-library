export default function Header({ theme }) {
  const menus = ["home", "aboutus", "services", "products", "contactus"];
  return (
    <div
      className={
        theme == "dark"
          ? "flex header bg-black text-white shadow-lg p-2 justify-between align-items-center text-center"
          : "flex header bg-white text-black shadow-lg p-2 justify-between align-items-center text-center"
      }
    >
      <div className="p-2 font-bold">Logo</div>
      <div className="flex justify-between">
        {menus &&
          menus.map((item, index) => {
            return (
              <div
                key={item + index}
                className="p-2 hover:text-pink-300 hover:cursor-pointer"
              >
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
}
