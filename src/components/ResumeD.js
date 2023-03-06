import "./ResumeStyles.css"


function DownloadResume () {
      // Function will execute on click of button 
  const onButtonClick = () => {
    // using Java Script method to get PDF file 
    fetch('FiamaGaitanResume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file 
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values 
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'FiamaGaitanResume.pdf';
        alink.click();
      })
    })
  }
  return (
    <>
    <div className="resume-container">
        <h1>Click to download resume</h1>
        <button onClick={onButtonClick}>
            Download PDF
        </button>
    </div>
    </>
  )
}
export default DownloadResume;