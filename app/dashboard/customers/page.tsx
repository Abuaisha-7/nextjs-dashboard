import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchAllCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
 
export default async function Page() {

  const customers: FormattedCustomersTable[] = await fetchAllCustomers();

  return (
  
      
        Table ({customers})
     
   
  );
}