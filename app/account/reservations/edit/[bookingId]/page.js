import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  //* Edit Rezervation

  //! 1-Get bookingId from URL
  const { bookingId } = params;

  //! 2- Get bookingId and cabinId 's data
  const { observations, numGuests, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  //! 3- Names must be the same as the data, check
  //! 4- Set default value
  //! 5- Create updateBooking named action
  //! 6- Use updateBooking named action
  //! 7- Create input to pass bookingId to action (set hidden). We cannot access any data received from the server component from the action. So I added a hidden input.

  return (
    <div>
      <h2 className="font-semibold text-lg lg:text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="bg-primary-900 py-8 px-4 lg:px-12 text-sm lg:text-lg flex gap-6 flex-col"
      >
        <input type="hidden" value={bookingId} name="bookingId" />
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
