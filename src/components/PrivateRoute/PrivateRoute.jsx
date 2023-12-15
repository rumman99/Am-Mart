import { useContext } from 'react';
import { userContext } from '../../App';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [userLogin, setUserLogin]= useContext(userContext);
    if(!userLogin.email){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;