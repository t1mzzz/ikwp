export default function IncompatibleViewScreen() {
  return (
    <div className="
      fixed inset-0 z-[9999]
      flex items-center justify-center
      bg-black text-white
      text-center px-6
    ">
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold mb-4">
          Screen Not Supported
        </h1>
        <p className="text-sm opacity-80">
          This website is currently optimized for desktop screens only.
          Please visit using a device with a screen size of at least
          <strong> 1200×585</strong>.
        </p>
      </div>
    </div>
  );
}
