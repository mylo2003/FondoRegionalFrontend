import { X } from 'lucide-react';
import GenericButton from '../common/GenericButton';

export default function Restricted({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white px-4 rounded-lg shadow-lg relative flex flex-col py-5 gap-3">
        <div className="flex items-center justify-center">
          <span className="">Material restringido</span>
          <button className="absolute right-4 top-4 cursor-pointer hover:text-red-400" type="button" onClick={onClose}><X /></button>
        </div>
        <div className="text-xl font-semibold text-center">Acercate a nuestra biblioteca pública <br /> Julio Pérez Ferrero <br /> <span className="text-lg font-normal">Para acceder a este libro!</span></div>

        <div className="my-2 text-center">Ubícanos <span>Av. 0A #12A-28 Barrio La Playa Cúcuta, <br /> Norte de Santander</span></div>

        <div className="my-2 text-center text-pretty">O ingresa para desbloquear este contenido</div>
        <GenericButton text="Iniciar Sesión" onClick={()=> window.location.href = "/login"} />
      </div>
    </div>
  )
}
