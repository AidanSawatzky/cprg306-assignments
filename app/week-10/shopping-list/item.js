export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="list-none w-full sm:w-64 bg-gradient-to-br from-slate-700 to-slate-500 text-white rounded-xl shadow-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <h2 className="text-xl font-semibold tracking-wide mb-2">{name}</h2>
      <p className="text-sm text-slate-200">
        Buy <span className="font-medium">{quantity}</span> in{" "}
        <span className="italic">{category}</span>
      </p>
    </li>
  );
}