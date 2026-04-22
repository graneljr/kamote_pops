import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTiktok, faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="bg-[#88512b] z-100 dark:bg-stone-950 py-8 w-full font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-[#fff8f2]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-6">
        <div className="font-['Newsreader'] text-xl font-bold text-[#fff8f2]">
          Kamote Pops
        </div>
        <p className="opacity-80">© {new Date().getFullYear()} Kamote Pops. Made with love and joy.</p>
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-xl">Social Links</h4>
         <span className="flex items-center gap-2 text-3xl">
          <a href="https://www.tiktok.com/@kamote.pops?_r=1&_d=secCgYIASAHKAESPgo83dcoQzbx6Ea27BM7gDM0kYV3Pg%2BszQWrmr%2BNR3SUV7KtjBkmN3yHypGQXwAJ4dcbrbLWqaPfVHpwLr5lGgA%3D&_svg=1&checksum=4ba45167e5a6a6b0fa9a61f6ff952c9deea78e132336465899d38a2a62c60edb&item_author_type=1&reflow_sign_scene=7&rgssign=8.1.1n1l-UpT4Kq9ylwLDkou8g&sec_uid=MS4wLjABAAAAEJuyQiqpmwzTkYxs-SIiO4Qus0Jbh7nWTzeQACuXmtR98iv-7Tcdcg1wO_bpKWQE&sec_user_id=MS4wLjABAAAAEJuyQiqpmwzTkYxs-SIiO4Qus0Jbh7nWTzeQACuXmtR98iv-7Tcdcg1wO_bpKWQE&share_app_id=1180&share_author_id=7631165478651986952&share_link_id=2adaaa4b-a4a2-4db3-a032-ba385f7fbefe&share_region=PH&share_scene=1&sharer_language=en&social_share_type=5&source=h5_t&timestamp=1776779000&u_code=f352g5ilg2l04e&ug_btm=b8727%2Cb7360&ugbiz_name=ACCOUNT&user_id=7631165478651986952&utm_campaign=client_share&utm_medium=android&utm_source=copy"> <FontAwesomeIcon icon={faTiktok}/></a>
            <a href="https://www.facebook.com/kamotepopssweetpotatoballs" target="_blank"  rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook}/></a>
         </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
