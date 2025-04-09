import { ReactNode,  useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    if (!user ) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }
    return children;
};

export default PrivateRoute;