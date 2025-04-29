/// <reference types="vite/client" />

declare module 'process' {
  const process: any;
  export default process;
}

interface Window {
  Buffer: typeof Buffer;
  process: any;
}

declare module '@twa-dev/sdk' {
  const WebApp: {
    ready: () => void;
    init: (params?: any) => void;
    close: () => void;
    expand: () => void;
    isExpanded: boolean;
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isActive: boolean;
      isProgressVisible: boolean;
      setText: (text: string) => void;
      onClick: (callback: () => void) => void;
      offClick: (callback: () => void) => void;
      show: () => void;
      hide: () => void;
      enable: () => void;
      disable: () => void;
      showProgress: (leaveActive?: boolean) => void;
      hideProgress: () => void;
    };
    BackButton: {
      isVisible: boolean;
      onClick: (callback: () => void) => void;
      offClick: (callback: () => void) => void;
      show: () => void;
      hide: () => void;
    };
    onEvent: (eventType: string, eventHandler: (...args: any[]) => void) => void;
    offEvent: (eventType: string, eventHandler: (...args: any[]) => void) => void;
    sendData: (data: any) => void;
    openLink: (url: string) => void;
    openTelegramLink: (url: string) => void;
    version: string;
    colorScheme: 'light' | 'dark';
    themeParams: Record<string, string>;
    isClosingConfirmationEnabled: boolean;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    setHeaderColor: (color: string) => void;
    setBackgroundColor: (color: string) => void;
    HapticFeedback: {
      impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
      notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
      selectionChanged: () => void;
    };
  };
  
  export default WebApp;
}
