import { useState, useEffect, ReactNode } from "react";
import _ from "lodash";

const UseLodash = <T extends ReactNode>({
  dataArray,
  method,
  operation,
}: {
  dataArray: T[];
  method: string;
  operation?: (data: T[]) => T[];
}) => {
  const [newArray, setNewArray] = useState<T[] | null>(null);

  useEffect(() => {
    if (dataArray && method) {
      let manipulatedArray: T[] = dataArray;
      if (operation) {
        manipulatedArray = operation(dataArray);
      }
      const lodashMethod = _.get(_, method);
      if (lodashMethod && typeof lodashMethod === "function") {
        const mappedArray = lodashMethod(manipulatedArray);
        setNewArray(mappedArray);
      }
    }
  }, [dataArray, method, operation]);

  return newArray;
};

export default UseLodash;
