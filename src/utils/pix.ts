/**
 * Helper to generate Banco Central do Brasil BR Code (EMV QRCPS-MPM) PIX Copia e Cola
 */

function formatField(id: string, value: string): string {
  const len = value.length.toString().padStart(2, '0');
  return `${id}${len}${value}`;
}

function crc16Ccitt(str: string): string {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

export interface PixPayloadParams {
  key: string;
  name: string;
  city: string;
  amount: number;
  txId?: string;
}

export function generatePixPayload({
  key,
  name,
  city,
  amount,
  txId = '***'
}: PixPayloadParams): string {
  // Normalize strings (remove accents and keep within EMV limits)
  const normalizedKey = key.trim();
  const normalizedName = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .slice(0, 25);
  const normalizedCity = city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim()
    .slice(0, 15);
  const normalizedTxId = (txId || '***')
    .replace(/[^a-zA-Z0-9]/g, '')
    .slice(0, 25) || '***';

  const formattedAmount = amount.toFixed(2);

  // Merchant Account Information (Tag 26)
  const gui = formatField('00', 'br.gov.bcb.pix');
  const keyField = formatField('01', normalizedKey);
  const merchantAccountInfo = formatField('26', `${gui}${keyField}`);

  // Additional Data Field Template (Tag 62)
  const txIdField = formatField('05', normalizedTxId);
  const additionalDataField = formatField('62', txIdField);

  // Assemble base payload (without CRC)
  const payloadWithoutCrc = [
    formatField('00', '01'), // Payload Format Indicator
    merchantAccountInfo,     // Merchant Account Information
    formatField('52', '0000'), // Merchant Category Code
    formatField('53', '986'),  // Transaction Currency (BRL = 986)
    formatField('54', formattedAmount), // Transaction Amount
    formatField('58', 'BR'),   // Country Code
    formatField('59', normalizedName), // Merchant Name
    formatField('60', normalizedCity), // Merchant City
    additionalDataField,      // Additional Data Field Template (txid)
    '6304'                    // CRC16 ID and length
  ].join('');

  const crc = crc16Ccitt(payloadWithoutCrc);
  return `${payloadWithoutCrc}${crc}`;
}
