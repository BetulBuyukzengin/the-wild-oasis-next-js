import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

//! Create an API Endpoint with Route Handlers
export async function GET(request, { params }) {
  console.log("request", request);
  console.log("params", params);
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
}
// export async function POST() {}
