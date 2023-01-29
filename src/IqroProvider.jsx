import { useEffect, useState, createContext } from "react"
import { FetchApi } from "./FetchApi"

const IqroContext = createContext()

function IqroProvider(props) {
  const [surats, setSurats] = useState([])
  useEffect(() => {
    FetchApi().then((res) => {
      setSurats(res)
    }
    )
  }, [])
  return <IqroContext.Provider value={surats}>
    {props.children}
  </IqroContext.Provider>
}

export { IqroContext, IqroProvider }
