import { HEADER_TITLE } from "@/constant";

const Header = () => {
    return (
        <div className="flex justify-center items-center m-auto font-bold text-title">
            <span>
                {HEADER_TITLE}
            </span>
        </div>
    );
};

export default Header;