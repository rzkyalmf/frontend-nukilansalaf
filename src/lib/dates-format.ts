const formatDate = (dateTimeString: Date): string => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Jakarta",
  });
};

const formatTime = (dateTimeString: Date): string => {
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });
};

const formatDay = (dateTimeString: Date): string => {
  const date = new Date(dateTimeString);
  const days = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  const jakartaDay = new Date(
    date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  return days[jakartaDay.getDay()];
};

const formatInputDate = (dateTimeString?: Date): string => {
  if (!dateTimeString) return "";
  const jakartaDate = new Date(
    dateTimeString.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  // Konversi eksplisit ke string untuk menghindari error TypeScript
  const year = jakartaDate.getFullYear().toString();
  const month = (jakartaDate.getMonth() + 1).toString().padStart(2, "0");
  const day = jakartaDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatInputTime = (dateTimeString?: Date): string => {
  if (!dateTimeString) return "";
  return dateTimeString.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta",
  });
};

export { formatDate, formatDay, formatInputDate, formatInputTime, formatTime };
