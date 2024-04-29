import P from "./Text/P";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Assets/Amelia Winters Resume.pdf";
    link.download = "AmeliaWinters_Resume.pdf";
    link.dispatchEvent(new MouseEvent("click"));
    link.remove();
  };

  return (
    <div onClick={handleDownload} style={{ cursor: "pointer" }}>
      <P>Download Resume</P>
    </div>
  );
};

export default DownloadResume;
