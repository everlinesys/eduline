export default function ErrorText({
  text,
}) {

  if (!text) return null;

  return (
    <p className="mt-2 text-sm text-red-500 font-medium">
      {text}
    </p>
  );
}