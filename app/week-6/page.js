// call the item list here
// item list will call the item component 
import ItemList from "./item-list";
export default function Page() {

    return (
      <main className="flex flex-col gap-[32px] sm:items-center bg-gray-300 min-h-screen">
        <div className="w-full h-12 bg-blue-500">
          <h1 className="text-3xl font-bold text-center">
            Shopping List
          </h1>
        </div>
        <ItemList />
      </main>
    );
}