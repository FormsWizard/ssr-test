import { useEffect, useState } from "react";
import { RealMap } from "./RealMap";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [setIsClient]);
  return isClient;
};
export const MyMap = () => {
  const isClient = useIsClient();
  if (isClient) return <RealMap />;
  return <div>Placeholder for the Map</div>;
};
