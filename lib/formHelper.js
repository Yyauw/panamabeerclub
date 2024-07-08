const validateForm = (form, setModalContent, modalRef) => {
  console.log(form);
  const { name, lastName, email, password, phoneNumber, birthDate } = form;
  if (!name || !lastName || !email || !password || !phoneNumber || !birthDate) {
    setModalContent("All fields are required");
    modalRef.current.showModal();
    return false;
  }

  const fechaNac = new Date(birthDate);
  const edad = new Date().getFullYear() - fechaNac.getFullYear();
  if (edad < 18) {
    setModalContent("The user must be +18 years");
    modalRef.current.showModal();
    return false;
  }

  return true;
};

export { validateForm };
