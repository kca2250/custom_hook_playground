type Props = {
  title: string;
  children: React.ReactNode;
};

export const CollapseSection = ({ title, children }: Props) => {
  return (
    <details style={{ marginBottom: "12px" }}>
      <summary
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {title}
      </summary>
      {children}
    </details>
  );
};
