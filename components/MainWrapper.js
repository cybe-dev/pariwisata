export default function MainWrapper({ children, className, ...props }) {
  return (
    <div
      className={`w-full px-8 lg:px-0 lg:w-640 xl:w-1024 2xl:w-1280 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
