import {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";

interface DeviceContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export function useDevice() {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
}

export function DeviceProvider({ children }: { children: ReactNode }) {
  const getDeviceInfo = () => {
    if (typeof window === "undefined") {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        screenWidth: 1920,
        screenHeight: 1080,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    // You can also check user agent for more accurate mobile detection
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    // Breakpoints: mobile < 768px, tablet 768px-1024px, desktop > 1024px
    const isMobile = width < 768 || isMobileUA;
    const isTablet = width >= 768 && width <= 1024 && !isMobileUA;
    const isDesktop = width > 1024 && !isMobileUA;

    return {
      isMobile,
      isTablet,
      isDesktop,
      screenWidth: width,
      screenHeight: height,
    };
  };

  const [deviceInfo, setDeviceInfo] =
    useState<DeviceContextType>(getDeviceInfo);

  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo(getDeviceInfo());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);

      // Initial check
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    }
  }, []);

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}
