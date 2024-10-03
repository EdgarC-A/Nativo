// Pagos.tsx
import React, { useState } from "react";

interface PagosProps {
  onSubmit: (metodo: string) => void; // Define el tipo para el prop
}

const Pagos: React.FC<PagosProps> = ({ onSubmit }) => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (metodoSeleccionado) {
      onSubmit(metodoSeleccionado); // Llama a la función onSubmit con el método seleccionado
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold">Método de Pago</h2>
      <select
        value={metodoSeleccionado}
        onChange={(e) => setMetodoSeleccionado(e.target.value)}
        className="p-2 border"
        required
      >
        <option value="">Selecciona un método de pago</option>
        <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
        <option value="PayPal">PayPal</option>
        <option value="Transferencia Bancaria">Transferencia Bancaria</option>
      </select>
      <button type="submit" className="p-2 mt-2 text-white bg-blue-500 rounded">
        Confirmar Método de Pago
      </button>
    </form>
  );
};

export default Pagos;
