import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoData from "../../json/logoModalData.json";

const LogoModal = ({ isOpen, onClose, logoSrc, logoName }) => {
  // 선택된 Logo의 json Data 불러오기
  const selectedLogo = logoData.filter((data) => data.name === logoName);

  if (!isOpen) return null;

  return (
    <>
      {selectedLogo.map((data, index) => (
        <div className="fixed inset-0 z-50 w-full h-full" key={index}>
          <div className="absolute inset-0 w-full h-full bg-dimmedLayer"></div>
          <div className="flex justify-center items-center relative top-1/2 left-1/2 overflow-y-auto z-10 w-11/12 md:w-4/5 lg:w-1/2 xl:w-2/5 h-auto lg:rounded-3xl bg-backgroundColor transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex justify-around py-16 px-5 w-full h-full">
              <button
                className="fixed top-5 right-5 z-10 w-8 h-8"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faXmark} className="w-full h-full" />
              </button>
              <div className="flex justify-center w-1/3">
                <div className="mb-5 lg:mb-0 mt-5 w-full xl:w-2/3">
                  <img src={logoSrc} alt={logoName} />
                </div>
              </div>
              <div className="w-2/3">
                <h1 className="lg:pt-5 text-3xl text-mainColor">
                  {data.name}
                  <span className="ml-2">{data.importance}</span>
                </h1>
                <div className="lg:h-4/5 pt-5 lg:pr-5">
                  <ul className="w-full overflow-y-auto font-DNFForgedBladeNormal text-lg text-textColor">
                    {data.content.map((contentData, index) => (
                      <li key={index} className="flex mb-1 keep-all">
                        <FontAwesomeIcon icon={faCheck} className="block pr-2 text-mainColor" />
                        {contentData}
                      </li>
                    ))}
                  </ul>
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
