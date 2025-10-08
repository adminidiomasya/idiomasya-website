export function getNextSessionDate(): Date {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();

  let daysUntilNext = 0;

  if (currentDay === 2) {
    if (currentHour >= 20) {
      daysUntilNext = 2;
    } else {
      daysUntilNext = 0;
    }
  } else if (currentDay === 4) {
    if (currentHour >= 20) {
      daysUntilNext = 5;
    } else {
      daysUntilNext = 0;
    }
  } else if (currentDay < 2) {
    daysUntilNext = 2 - currentDay;
  } else if (currentDay === 3) {
    daysUntilNext = 1;
  } else {
    daysUntilNext = (9 - currentDay) % 7;
  }

  const nextSession = new Date(now);
  nextSession.setDate(now.getDate() + daysUntilNext);
  nextSession.setHours(18, 0, 0, 0);

  return nextSession;
}

export function getNextTwoSessions(): { date: Date; dayName: string }[] {
  const firstSession = getNextSessionDate();
  const firstDay = firstSession.getDay();

  const secondSession = new Date(firstSession);
  if (firstDay === 2) {
    secondSession.setDate(firstSession.getDate() + 2);
  } else {
    secondSession.setDate(firstSession.getDate() + 5);
  }

  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  return [
    { date: firstSession, dayName: dayNames[firstSession.getDay()] },
    { date: secondSession, dayName: dayNames[secondSession.getDay()] }
  ];
}

export function formatDate(date: Date): string {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
}
