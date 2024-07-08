import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "./firebaseConfig";

const subirFoto = async (foto, carpeta) => {
  try {
    const storageRef = ref(storage, `${carpeta}/${Date.now()}${foto.name}`);
    await uploadBytes(storageRef, foto, { contentType: foto.type });
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    throw new Error(error);
  }
};

const borrarFoto = async (url) => {
  try {
    const urlRef = ref(storage, url);
    await deleteObject(urlRef);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export { subirFoto, borrarFoto };
