const db = {
  invoices: [
    {
      id: '23525',
      recepient: 'Marc Jacobs',
      account: 352523423,
      total: 4400,
    },
    {
      id: '45713',
      recepient: 'Antony Hopkins',
      account: 352523423,
      total: 5050,
    },
    {
      id: '09513',
      recepient: 'New Vicob',
      account: 352523423,
      total: 8400,
    },
    {
      id: '34718',
      recepient: 'Moris Amars',
      account: 352523423,
      total: 400,
    },
  ],
};
export const getInvoices = () => {
  return Promise.resolve(db.invoices);
};
export const getInvoicesById = invoiceId => {
  return Promise.resolve(db.invoices.find(invoice => invoice.id === invoiceId));
};
