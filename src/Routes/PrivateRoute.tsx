import { ReactNode, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useContext(AuthContext);
    if (user ) {
        return children

    }
    return (
        <div>
            <Navigate to="/" replace={true} />
        </div>
    );
};

export default PrivateRoute;