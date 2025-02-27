import { Link } from "react-router-dom";

const IndonesianFlag = () => (
  <div className="px-2.5 py-1 bg-gray-50 border-r border-gray-300 flex items-center">
    <div className="w-6 h-6">
      <div className="w-6 h-[12.45px] bg-red-600"></div>
      <div className="w-6 h-3 bg-white"></div>
    </div>
  </div>
);

const VideoBelajarLogo = ({ logo }: { logo: string }) => (
  <Link to="/" className="w-[237px] h-[56px]">
    <img src={logo} className="h-[40px] mt-3 ml-0" alt="Logo" />
  </Link>
);

export { IndonesianFlag, VideoBelajarLogo };
