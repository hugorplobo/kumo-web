interface WebApp {
    initData: string,
    showPopup: (params: { title: string, message: string }) => void;
}
  
type TgWindows = Window & typeof globalThis & { Telegram: { WebApp: WebApp } };

export function useTelegram() {
    return (window as TgWindows).Telegram.WebApp;
}