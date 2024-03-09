import useAsync from "./useAsync";

export default function AsyncComponent() {
  const { loading, error, value } = useAsync<string>(() => {
    return new Promise((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 1000);
    });
  });

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error ? error.message : undefined}</div>
      <div>{value}</div>
    </div>
  );
}
