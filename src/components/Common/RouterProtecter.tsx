import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/Login/useAuth";

interface RouterProtecterProps {
  children: React.ReactNode;
}

function RouterProtecter({ children }: RouterProtecterProps) {
  const nav = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth === undefined) {
      alert("로그인이 필요합니다.");
      nav("/");
    }
  }, []);

  return <>{children}</>;
}

export default RouterProtecter;
