const subirFoto = async (foto) => {
  try {
    const storageRef = ref(storage, `fotoPerfil/${Date.now()}${foto.name}`);
    await uploadBytes(storageRef, foto, { contentType: foto.type });
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    throw new Error(error);
  }
};

export { subirFoto };
