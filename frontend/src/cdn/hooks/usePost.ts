import { toaster } from "@/ui/admin/components/atoms/toast/toaster";
import { useState } from "react";

type UsePostProps = {
  url: string;
  toastTitle: string;
  onSuccess?: () => void;
  onError?: () => void;
};

export function usePost(props: UsePostProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function send(body: Record<string, any>) {
    try {
      setLoading(true);
      const response = await fetch(props.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setLoading(false);

        if (props.onSuccess) {
          props.onSuccess();
        }

        toaster.success({
          title: props.toastTitle,
          message: "Registered with success",
        });

        return await response.json();
      } else {
        setLoading(false);
        setError(true);

        if (props.onError) {
          props.onError();
        }

        toaster.error({
          title: props.toastTitle,
          message: "Registration failed",
        });
      }
    } catch (error) {
      setLoading(false);
      setError(true);

      if (props.onError) {
        props.onError();
      }

      toaster.error({
        title: props.toastTitle,
        message: "An unexpected error occurred",
      });
    }
  }

  return { loading, error, send };
}
