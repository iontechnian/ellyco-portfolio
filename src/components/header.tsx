export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="text-[45px] text-center mt-[100px] mb-[20px]"
      style={{ color: "var(--blue-color)" }}
    >
      {children}
    </h1>
  );
}
