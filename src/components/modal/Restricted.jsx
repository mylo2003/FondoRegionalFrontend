import { X } from 'lucide-react';

export default function Restricted({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white h-60 w-96 px-4 rounded-lg shadow-lg relative border-2 border-amber-500">
        <div className="flex items-center justify-center">
          <span className="my-5">Material restringido</span>
          <button className="absolute right-4 top-4 cursor-pointer hover:text-red-400" type="button" onClick={onClose}><X /></button>
        </div>
        <div className="text-xl font-semibold text-center">Acercate a nuestra biblioteca pública <br /> Julio Pérez Ferrero <br /> <span className="text-lg font-normal">Para acceder a este libro!</span></div>

        <div className="mt-2 text-center">Ubícanos <span>Av. 0A #12A-28 Barrio La Playa Cúcuta, Norte de Santander</span></div>
      </div>
    </div>
  )
}
