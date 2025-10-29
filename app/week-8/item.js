export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-slate-400 p-4 m-4 flex flex-col justify-between w-1/5 list-none cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <h2 className="text-2xl font-serif font-bold">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
