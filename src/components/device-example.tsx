import { useDevice } from "../DeviceContext";

export default function DeviceExample() {
  const { isMobile, isTablet, isDesktop, screenWidth, screenHeight } =
    useDevice();

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-2">Device Information</h3>
      <div className="space-y-2">
        <p>📱 Mobile: {isMobile ? "Yes" : "No"}</p>
        <p>📟 Tablet: {isTablet ? "Yes" : "No"}</p>
        <p>🖥️ Desktop: {isDesktop ? "Yes" : "No"}</p>
        <p>
          📏 Screen: {screenWidth} × {screenHeight}
        </p>

        {isMobile && (
          <div className="mt-4 p-2 bg-blue-100 rounded">
            <p className="text-sm">🌸 Mobile-specific content here!</p>
          </div>
        )}

        {isTablet && (
          <div className="mt-4 p-2 bg-green-100 rounded">
            <p className="text-sm">🌸 Tablet-optimized layout!</p>
          </div>
        )}

        {isDesktop && (
          <div className="mt-4 p-2 bg-purple-100 rounded">
            <p className="text-sm">🌸 Desktop experience with full features!</p>
          </div>
        )}
      </div>
    </div>
  );
}
