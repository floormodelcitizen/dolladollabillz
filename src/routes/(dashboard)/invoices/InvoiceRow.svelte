<script lang="ts">
  import ThreeDots from '$lib/components/icon/ThreeDots.svelte'
  import View from '$lib/components/icon/View.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import { centsToDollars, sumLineItems } from '$lib/utils/moneyHelpers'
  // import type { Invoice } from 'src/global'
  import { convertDate, isLate } from '$lib/utils/dateHelpers'

  export let invoice: Invoice

  const getInvoiceLabel = () => {
    if (invoice.invoiceStatus === 'draft') {
      return 'draft'
    } else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
      return 'sent'
    } else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
      return 'late'
    } else if (invoice.invoiceStatus === 'paid') {
      return 'paid'
    }
  }
</script>

<div class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6">
  <div class="status"><Tag className="ml-auto lg:ml-0" label={getInvoiceLabel()} /></div>
  <div class="dueDate text-sm lg:text-lg">{convertDate(invoice.dueDate)}</div>
  <div class="invoiceNumber text-sm lg:text-lg">{invoice.invoiceNumber}</div>
  <div class="clientName text-base font-bold lg:text-xl whitespace-nowrap truncate">{invoice.client.name}</div>
  <div class="amount text-right font-mono text-sm font-bold lg:text-lg">
    ${centsToDollars(sumLineItems(invoice.lineItems))}
  </div>
  <div class="lg:center viewButton hidden text-sm lg:block lg:text-lg">
    <a href="#" class="text-pastelPurple hover:text-daisyBush"><View /></a>
  </div>
  <div class="lg:center moreButton hidden text-sm lg:block lg:text-lg">
    <button class=" text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
  </div>
</div>

<style lang="postcss">
  .invoice-row {
    grid-template-areas:
      'invoiceNumber invoiceNumber'
      'clientName amount'
      'dueDate status';
  }

  @media (min-width: 1024px) {
    .invoice-row {
      grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
    }
  }

  .invoice-row .status {
    grid-area: status;
  }

  .invoice-row .dueDate {
    grid-area: dueDate;
  }

  .invoice-row .invoiceNumber {
    grid-area: invoiceNumber;
  }

  .invoice-row .clientName {
    grid-area: clientName;
  }

  .invoice-row .amount {
    grid-area: amount;
  }

  .invoice-row .viewButton {
    grid-area: viewButton;
  }

  .invoice-row .moreButton {
    grid-area: moreButton;
  }
</style>