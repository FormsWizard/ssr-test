import { useEffect, useState } from "react";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [setIsClient]);
  return isClient;
};
export const MyComponent = () => {
  const isClient = useIsClient();
  if (isClient) return <h1>Hello from Client</h1>;
  return <h1>Hello from Server</h1>;
};
