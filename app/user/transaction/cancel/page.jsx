export default function cancelPage() {
  return (
    <div className="flex items-center h-[85vh] justify-center min-h-screen bg-secondary/20">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          ¡Hubo un error en el pago!
        </h1>
        <p className="text-gray-700 mb-6">
          Lo sentimos, pero algo salió mal al procesar tu pago. Por favor,
          intenta nuevamente.
        </p>
      </div>
    </div>
  );
}
