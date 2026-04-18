import toast from "react-hot-toast";

export const submitWithToast = async ({
  data,
  pageKey,
  successMsg,
  failMsg,
  resetForm,
  setLoading,
}) => {
  const toastId = toast.loading("Submitting...");

  try {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    localStorage.setItem(
      pageKey,
      JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
      })
    );

    toast.success(successMsg, { id: toastId });
    resetForm(); // ✅ input empty ho rahe hain
  } catch {
    toast.error(failMsg, { id: toastId });
  } finally {
    setLoading(false);
  }
};
