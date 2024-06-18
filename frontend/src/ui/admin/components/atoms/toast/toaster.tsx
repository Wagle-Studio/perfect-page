import { toast, Id } from "react-toastify";
import { Toast, ToastProps } from "@/ui/admin/components/atoms/toast/Toast";

export const toaster = (props: ToastProps): Id => {
  return toast(<Toast {...props} />, {});
};

toaster.info = (props: ToastProps): Id => {
  return toast.info(<Toast {...props} />, {});
};

toaster.success = (props: ToastProps): Id => {
  return toast.success(<Toast {...props} />, {});
};

toaster.warning = (props: ToastProps): Id => {
  return toast.warning(<Toast {...props} />, {});
};

toaster.error = (props: ToastProps): Id => {
  return toast.error(<Toast {...props} />, {});
};
