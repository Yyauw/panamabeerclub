const Modal = ({ modalRef, content }) => {
  return (
    <dialog id="my_modal_1" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Message!</h3>
        <p className="py-4">{content}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
