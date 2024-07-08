export default function ConfirmationModal({
  modalRef,
  content,
  handleConfirm,
}) {
  return (
    <dialog id="my_modal_1" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Alerta!</h3>
        <p className="py-4">{content}</p>
        <div className="modal-action">
          <button className="btn btn-success" onClick={handleConfirm}>
            Confirmar
          </button>
          <form method="dialog">
            <button className="btn btn-primary">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
