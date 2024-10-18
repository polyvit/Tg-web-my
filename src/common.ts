type DataType = {
    title: string;
    price: number;
    id: string
}

export const buyClickHandler = async ({title, price, id}: DataType) => {
    const tg = (window as any).Telegram.WebApp;
    tg.MainButton.text = "Pay";
    tg.MainButton.show();
    const data = {
      title,
      description: "Книжная продукция",
      payload: id,
      currency: "RUB",
      prices: JSON.stringify([{ amount: price * 100, label: "Один экземпляр" }]),
      provider_token: "381764678:TEST:98003",
    };
    const params = new URLSearchParams(data).toString();

    const response = await fetch(
      `https://api.telegram.org/bot8041898817:AAFY6w8U7GgUTdTQ8hYaoozUTub21uiOuM0/createInvoiceLink?${params}`
    );
    const json = await response.json();
    tg.MainButton.onClick(() => {
      tg.openInvoice(json.result);
    });
  };