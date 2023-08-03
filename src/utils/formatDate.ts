const formatDate = (date: Date | string, type: 'long' | '2-digit'): string => {
  const dateObject = typeof date === 'string' ? new Date(date) : date;

  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: type,
    year: 'numeric',
    timeZone: 'UTC'
  });
  const dateFormatted = dateFormatter.format(dateObject);
  return dateFormatted;
};

export default formatDate;
