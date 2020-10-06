
import React, {useState} from 'react';

export const UserContext = React.createContext();


const UserContextProvider = ({children}) => { 
    const [mobile, setMobile] = useState({
      isMobile:true
    });
    const onMobile = () => {
      setMobile({...mobile, isMobile:!mobile.isMobile})
    }
    // console.log(mobile.isMobile)
    return(
      <UserContext.Provider value={{mobile, onMobile}}>
        {children}
      </UserContext.Provider>
    )

}

export default UserContextProvider;

