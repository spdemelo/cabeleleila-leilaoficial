export const formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long'
    }).format(new Date(date));
  };