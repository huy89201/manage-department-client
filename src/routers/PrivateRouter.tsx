import { useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: any;
}

export default function PrivateRouter({ children }: Props) {
  const [user, SetUser] = useState(false);

  if (user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
