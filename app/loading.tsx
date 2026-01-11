export default function Loading() {
  return (
    <div className="fixed z-1000 inset-0 top-0 bottom-0 right-0 left-0 w-full h-screen bg-[#1A1A1A] flex items-center justify-center">
      <div className="bg-green-200 h-[100px] w-[100px] animate-spin"></div>
    </div>
  );
}
