/* Preselecciona un plan en el formulario de reserva y baja hasta él.
   Booking.tsx escucha este evento; lo disparan tanto los chips del hero como
   los botones de la tabla de planes. */
export function selectPlan(id: string) {
  window.dispatchEvent(new CustomEvent("kairos:select-plan", { detail: id }));
  document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" });
}
