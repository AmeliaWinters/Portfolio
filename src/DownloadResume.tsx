const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Assets/Amelia Winters Resume.pdf";
    link.download = "AmeliaWinters_Resume.pdf";
    link.dispatchEvent(new MouseEvent("click"));
    link.remove();
  };

  return (
    <button
      onClick={handleDownload}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      Download Resume
    </button>
  );
};

export default DownloadResume;
