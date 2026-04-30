// This layout deliberately renders only {children} so that NextStudio
// can inject its own <html> document without double-wrapping.
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
