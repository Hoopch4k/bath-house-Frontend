import { Header } from "../components/templates/Header";



export const handleHeader = (setTempl) => {
    if (!(window.location.pathname === "/")) {
        setTempl("")
      }
}
