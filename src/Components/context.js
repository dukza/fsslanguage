
import React, {useState, useContext} from 'react';

const UiContext = React.createContext();



const UiContextProvider = ({children}) => 
{ 
    const [ui, setUi] = useState({
      sideNavWebs:[
        {
          name:'Tables',
          to:'tables'
        }
        ,{
          name:'Switch',
          to:'switch'
        }
        ,{
          name:'Alerts',
          to:'alerts'
        }  
        ,{
          name:'Badge',
          to:'Badge'
        } 
      ],
      sideNavWritings:[
        {
          name:'UI 텍스트',
          to:'UIText'
        }
        ,{
          name:'띄어쓰기',
          to:'spacing'
        }
        ,{
          name:'톤/어조',
          to:'tone'
        }  
        ,{
          name:'참고사항',
          to:'etc'
        } 
      ]
    })   


    return(
      <UiContext.Provider value={{ui}}>
        {children}
      </UiContext.Provider>
    )

}
//자동으로 실행되는 함수
export const useUi = () => {
    const {ui} = useContext(UiContext);
    return ui;
}


export default UiContextProvider;

