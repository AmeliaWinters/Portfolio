import P from "../Text/P";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Amelia Winters Resume.pdf";
    link.download = "AmeliaWinters_Resume.pdf";
    link.dispatchEvent(new MouseEvent("click"));
    link.remove();
  };

  return (
    <div onClick={handleDownload}>
      <P>Download Resume</P>
    </div>
  );
};

export default DownloadResume;
