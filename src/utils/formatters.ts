export function formatBRL(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
}

// Backward compatibility alias if needed
export const formatCOP = formatBRL;

export function generateOrderId(): string {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `SHV-${randomNum}`;
}
