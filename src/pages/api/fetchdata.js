export async function GET() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json", // Specify the content type as JSON
    },
  });

  return new Response(await response.text(), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
