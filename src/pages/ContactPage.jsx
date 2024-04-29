import React from "react";
import SubHeader from "../components/common/SubHeader";

const ContactPage = () => {
  // 이메일 유효성 검사
  function check() {
    var email = document.getElementById("email").value;
    if (email != "") {
      var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
      if (exptext.test(email) == false) {
        //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우
        alert("입력한 메일형식이 올바르지 않습니다.");
        document.formtag.email.focus();
        return false;
      }
    }
    modal();
    return true;
  }

  // modal 생성 및 삭제
  function modal() {
    document.querySelector(".complete-modal").classList.add("complete");

    setTimeout(() => {
      document.querySelector(".complete-modal").classList.remove("complete");
    }, 2000);
  }

  return (
    <main className="flex mt-24" id="container">
      <header className="w-1/3 text-center">
        <SubHeader headerText={"Contact"} />
        <p className="font-DNFForgedBladeNormal text-xl text-mainColor">
          더 자세한 것을 알고 싶으시면,
          <br />
          이메일을 보내주세요!
        </p>
        <div className="flex justify-around w-1/3 mx-auto pt-8">
          <a
            href="https://newbean-j.tistory.com/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/contact-img/tistory-logo.png`}
              alt="tistory-logo"
            />
          </a>
          <a
            href="https://github.com/NewBean0312"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/contact-img/github-logo.png`}
              alt="github-logo"
            />
          </a>
        </div>
      </header>
      <section className="w-2/3 flex justify-center pt-24">
        <form
          action="https://script.google.com/macros/s/AKfycbzPiI3DndlAstzOAtjRdHASF4Qyr5PITRXuQdI-YK8CyPYWVDgS_0P0HityZBpqpsmdiw/exec"
          method="POST"
          data-email="newbean0312@gmail.com"
          className="w-5/6 h-2/3 rounded-2xl border-4 border-solid border-mainColor"
        >
          <fieldset>
            <div className="w-5/6 h-20 mx-auto pt-7 border-b-2 border-solid border-mainColor">
              <label
                for="useName"
                className="italic text-2xl font-bold text-mainColor"
              >
                Name :
              </label>
              <input
                type="text"
                id="useName"
                name="useName"
                placeholder=" 이름을 입력해 주세요."
                autoComplete="off"
                required
                className="ml-2 font-bold text-lg"
              />
            </div>
            <div className="w-5/6 h-20 mx-auto pt-7 border-b-2 border-solid border-mainColor">
              <label
                for="useEmail"
                className="italic text-2xl font-bold text-mainColor"
              >
                Address :
              </label>
              <input
                type="text"
                id="useEmail"
                name="useEmail"
                placeholder=" 이메일을 입력해 주세요."
                autoComplete="off"
                required
                className="ml-2 font-bold text-lg"
              />
            </div>
            <div className="flex w-5/6 h-72 mx-auto pt-7 border-b-2 border-solid border-mainColor">
              <label
                for="useMessage"
                className="w-1/5 italic text-2xl font-bold text-mainColor"
              >
                Message :
              </label>
              <textarea
                type="text"
                id="useMessage"
                name="useMessage"
                placeholder=" 내용을 입력해 주세요."
                autoComplete="off"
                required
                cols="30"
                rows="10"
                className="w-4/5 h-full font-bold text-lg text-textColor"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                onclick={check}
                className="w-44 h-12 mt-4 mr-3 rounded-xl bg-mainColor font-medium text-xl text-whiteColor"
                id="button"
              >
                Send Message
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
