import GenericButton from "../common/GenericButton";

export default function ActionModal({ onClose, onClick }) {
  return (
    <div className={` bg-white p-5 backdrop-blur-lg shadow fixed w-80 h-40 inset-0 mx-auto my-auto rounded-lg`}>
      <div className="flex flex-col justify-center items-center h-full">
        <p className="mb-5">¿Está seguro que quiere hacerlo?</p>
        <div className="flex gap-2 h-10">
          <GenericButton onClick={onClose} text='Cancelar' type='secondary' />
          <GenericButton onClick={onClick} text='Aceptar' />
        </div>
      </div>
    </div>
  )
}
