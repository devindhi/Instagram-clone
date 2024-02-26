import { Box ,Flex} from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {useLocation} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../firebase/firebase";

const PageLayout = ({children}) => {
  const {pathname} = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  return (
   <Flex>
    {/*sidebar on the left*/ }
     {canRenderSidebar? ( <Box w={{base:'70px',md:'240px'}}>
     <Sidebar/>
    </Box>):null}
    {/*the content on right*/ }
    <Box flex={1} w={{base:"calc(100% - 70px)",md:"calc(100% - 240px)"}}>
        {children}
    </Box>
   </Flex>
  )
}

export default PageLayout
