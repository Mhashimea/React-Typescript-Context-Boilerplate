import * as React from "react";
import { useImmer } from "use-immer";

// Configuring the conext store.

export default function configStore() {
  const context = React.createContext<any | null>(null);
  const Provider = (props: any) => {
    const [state, setState] = useImmer(props.initialState);
    const contextValue = React.useMemo(() => [state, setState], [state]);
    return (
      <context.Provider value={contextValue}>{props.children}</context.Provider>
    );
  };
  const useStore = () => React.useContext(context);
  return {
    Provider,
    useStore,
  };
}
