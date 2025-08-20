import GenericButton from "../common/GenericButton";

export default function StatusModal({ text, status, onClose }) {
  return (
    <div className={` bg-white p-5 backdrop-blur-lg shadow fixed w-80 h-40 inset-0 mx-auto my-auto rounded-lg`}>
      <div className="flex flex-col justify-center items-center h-full">
        <p className="mb-5"> {status ? `Se ${text} con éxito.` : "Ocurrió un error."}</p>
        <GenericButton onClick={onClose} text='Cerrar' />
      </div>
    </div>
  )
}
