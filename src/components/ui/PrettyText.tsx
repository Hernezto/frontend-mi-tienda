const PrettyText = ({ children }: { children: any }) => {
  return (
    <div className="flex justify-center p-16 m-auto text-center align-middle h-96 size-9/12">
      <p className="m-auto text-2xl opacity-55">{children}</p>
    </div>
  );
};

export default PrettyText;
