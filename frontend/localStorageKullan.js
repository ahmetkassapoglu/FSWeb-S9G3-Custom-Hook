import { useState } from "react";

 

 export default function localStorageKullan ( keyValue , baslangicDegeri){
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(keyValue);
        return item ? JSON.parse(item) : baslangicDegeri;
      });
      const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(keyValue, JSON.stringify(value));
      };
      return [storedValue, setValue];

 }