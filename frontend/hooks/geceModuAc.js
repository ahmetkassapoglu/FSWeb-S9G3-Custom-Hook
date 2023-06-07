
import localStorageKullan from "../localStorageKullan"
export default function geceModuAc (keyValue,baslangicDegeri) {
 const [geceModu,setGeceModu] = localStorageKullan(keyValue,baslangicDegeri)
 const toggleMode = e => {
    e.preventDefault();
    setGeceModu(!geceModu);
   
  };
 return [geceModu, toggleMode]
}