const ContactSection = () => {
  return (
    <section className="flex justify-center w-2/3 pt-24">
      <div className="flex flex-col justify-center w-5/6 h-1/2 rounded-2xl border-4 border-solid border-mainColor">
        <div className="flex w-5/6 h-20 mx-auto pt-7 border-b-2 border-solid border-mainColor">
          <div className="italic text-2xl font-bold text-mainColor">Name :</div>
          <div className="ml-2 font-DNFForgedBladeNormal italic text-2xl text-textColor">
            전유빈
          </div>
        </div>
        <div className="flex w-5/6 h-20 mx-auto pt-7 border-b-2 border-solid border-mainColor">
          <div className="italic text-2xl font-bold text-mainColor">
            Email :
          </div>
          <div className="ml-2 font-DNFForgedBladeNormal italic text-2xl text-textColor">
            newbean0312@gmail.com
          </div>
        </div>
        <div className="flex w-5/6 h-20 mb-14 mx-auto pt-7 border-b-2 border-solid border-mainColor">
          <div className="italic text-2xl font-bold text-mainColor">
            Phone :
          </div>
          <a
            href="tel:010-6775-6374"
            className="ml-2 font-DNFForgedBladeNormal italic text-2xl text-textColor"
          >
            010-6775-6374
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
