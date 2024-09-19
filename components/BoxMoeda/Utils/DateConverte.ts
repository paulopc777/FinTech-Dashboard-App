export function FormateDate(dateString: string): string {
  const date = new Date(dateString); // Converte a string para um objeto Date
  const timestamp = date.getTime(); // Obtém o timestamp em milissegundos
  
  const now = Date.now(); // Obtém o timestamp atual em milissegundos
  const diff = now - timestamp; // Calcula a diferença em milissegundos

  // Converte a diferença em segundos
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Formata a saída
  if (days > 0) {
    return days === 1 ? "há 1 dia" : `há ${days} dias`;
  } else if (hours > 0) {
    return hours === 1 ? "há 1 hora" : `há ${hours} horas`;
  } else if (minutes > 0) {
    return minutes === 1 ? "há 1 minuto" : `há ${minutes} minutos`;
  } else {
    return seconds === 1 ? "há 1 segundo" : `há ${seconds} segundos`;
  }
}
