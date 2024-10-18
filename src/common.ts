export const buyClickHandler = async () => {
    const tg = (window as any).Telegram.WebApp;
    tg.MainButton.text = "Pay";
    tg.MainButton.show();
    const data = {
      title: "Meercat Coin",
      description: "Virtual Purchase",
      payload: `User_1`,
      currency: "RUB",
      prices: JSON.stringify([{ amount: 10000, label: "Онлайн продукция" }]),
      provider_token: "381764678:TEST:98003",
    };
    const params = new URLSearchParams(data).toString();

    const response = await fetch(
      `https://api.telegram.org/bot8041898817:AAFY6w8U7GgUTdTQ8hYaoozUTub21uiOuM0/createInvoiceLink?${params}`
    );
    const json = await response.json();
    tg.MainButton.onClick(() => {
      tg.sendInvoice(json.result);
    });
  };