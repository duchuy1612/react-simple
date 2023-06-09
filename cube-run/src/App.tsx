import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function App() {
  const nav = useNavigate();

  useEffect(() => {
    nav("/login")
  }, []);
  
  return <></>;
}
