import { useLocation  } from "react-router-dom";
import { useLayoutEffect } from "react";


const Wrapper = ({ children }) => {
    const location = useLocation();
  
    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);
  
    return children;
  };

  export default Wrapper