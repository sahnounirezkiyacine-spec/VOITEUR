import { Voiture } from "./models/Voiture";

function App() {
  const voiture = new Voiture("Toyota", "Corolla", 2022);

  const handleStart = () => {
    voiture.start();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border-t-8 border-indigo-500">

        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          🚗 Véhicule Info
        </h1>

        <div className="space-y-3 text-gray-700 text-lg">
          <p className="flex justify-between">
            <span className="font-semibold text-gray-600">Marque</span>
            <span className="text-indigo-600">{voiture.make}</span>
          </p>

          <p className="flex justify-between">
            <span className="font-semibold text-gray-600">Modèle</span>
            <span className="text-purple-600">{voiture.model}</span>
          </p>

          <p className="flex justify-between">
            <span className="font-semibold text-gray-600">Année</span>
            <span className="text-pink-600">{voiture.year}</span>
          </p>
        </div>

        <button
          onClick={handleStart}
          className="mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          🔑 Démarrer le moteur
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Cliquez pour voir le message dans la console
        </p>

      </div>
    </div>
  );
}

export default App;
