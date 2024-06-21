import { useState } from "react";

type UsePutProps<T> = {
  url: string;
  onSuccess?: (res: T) => void;
  onError?: () => void;
};

export function usePut<T>(props: UsePutProps<T>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function send(body: Record<string, any>): Promise<T | null> {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(props.url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setLoading(false);
        const res = await response.json();

        if (props.onSuccess) {
          props.onSuccess(res);
        }

        return res;
      } else {
        setLoading(false);
        setError(true);

        if (props.onError) {
          props.onError();
        }

        return null;
      }
    } catch (error) {
      setLoading(false);
      setError(true);

      if (props.onError) {
        props.onError();
      }

      return null;
    }
  }

  return { loading, error, send };
}
