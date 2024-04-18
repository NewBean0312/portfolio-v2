import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoData from "../../json/logoModalData.json";

const LogoModal = ({ isOpen, onClose, imageSrc, imageAlt, logoId }) => {
  const selectedLogo = logoData.filter((data) => data.id === logoId);
  console.log(selectedLogo);
  
  if (!isOpen) return null;

  return (
    <>
      {selectedLogo.map((data, index) => (
        <div className="fixed inset-0 z-50 w-full h-full" key={index}>
          <div className="absolute inset-0 w-full h-full bg-dimmedLayer">
            <div className="flex justify-center items-center fixed top-1/2 left-1/2 z-10 w-2/5 h-2/5 rounded-3xl bg-backgroundColor transform -translate-x-1/2 -translate-y-1/2">
              <button
                className="absolute top-5 right-5 z-10 w-8 h-8"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faXmark} className="w-full h-full" />
              </button>
              <div className="flex relative p-7 w-full h-full">
                <div className="flex w-1/3">
                  <div className="mt-5 ml-7 w-full">
                    <img src={imageSrc} alt={imageAlt} />
                  </div>
                </div>
                <div className="w-2/3 pl-5">
                  <div className="flex items-center h-12">
                    <h1 className="pt-5 text-3xl text-mainColor">
                      {data.name}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LogoModal;
