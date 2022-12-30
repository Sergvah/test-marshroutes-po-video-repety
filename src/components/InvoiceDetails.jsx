import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoicesById } from 'services/FakeApi';

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvoicesById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if (!invoice) {
    return;
  }
  return <div>Info {invoiceId}</div>;
};
export default InvoiceDetails;
