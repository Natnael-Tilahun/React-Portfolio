export default function ErrorPage() {
  return (
    <div
      id="error-page "
      className="flex flex-col justify-center items-center text-xl gap-5"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        <i>404 Page not found</i>
      </p>
    </div>
  );
}
