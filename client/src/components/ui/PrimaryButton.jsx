function PrimaryButton({
  children,
  onClick,
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        background: "#8B5CF6",
        color: "white",
        border: "none",
        padding: "14px 28px",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        transition: ".3s",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;