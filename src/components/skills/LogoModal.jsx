import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoData from "../../json/logoModalData.json";

const LogoModal = ({ isOpen, onClose, imageSrc, imageAlt, logoId }) => {
  // 선택된 Logo의 json Data 불러오기
  const selectedLogo = logoData.filter((data) => data.id === logoId);

  if (!isOpen) return null;

  return (
    <>
      {selectedLogo.map((data, index) => (
        <div className="fixed inset-0 z-50 w-full h-full" key={index}>
          <div className="absolute inset-0 w-full h-full bg-dimmedLayer">
            <div className="flex justify-center items-center fixed top-1/2 left-1/2 overflow-y-auto z-10 w-11/12 lg:w-2/5 h-3/5 lg:h-2/5 rounded-3xl bg-backgroundColor transform -translate-x-1/2 -translate-y-1/2">
              <button
                className="absolute top-5 right-5 z-10 w-8 h-8"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faXmark} className="w-full h-full" />
              </button>
              <div className="lg:flex p-7 w-full h-full">
                <div className="flex justify-end w-1/4 lg:w-1/3 lg:w-1/3">
                  <div className="mb-5 lg:mb-0 mt-5 w-full">
                    <img src={imageSrc} alt={imageAlt} />
                  </div>
                </div>
                <div className="w-full lg:w-2/3 lg:pl-5">
                  <h1 className="lg:pt-5 text-3xl text-mainColor">
                    {data.name}
                  </h1>
                  <div className="lg:h-4/5 pt-5 lg:pr-5">
                    <p className="w-full overflow-y-auto font-DNFForgedBladeNormal text-lg text-textColor">
                      {data.content}
                    </p>
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
