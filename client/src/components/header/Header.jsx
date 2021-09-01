import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Experss</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://sktravel.com.vn/wp-content/uploads/2021/05/nhung-diem-ngam-binh-minh-dep-nhat-phu-quoc-7.jpg"
                alt=""
            />
        </div>
    );
}