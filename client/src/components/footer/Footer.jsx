import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

export default function Footer() {
    const PF = 'http://localhost:3000/assets/';

    return (
        <div className="footer">
            <div className="footerLeft">
                <span className="footerTitle">Blog's NTM</span>
                <img className="footerImg" src={PF + "Minh.png"} alt="" />
            </div>
            <div className="footerCenter">
                <span className="footerTarget">Mục đích của Blog</span>
                <p>Trang blog được lập ra nhằm mục đích các dev có nơi để trao đổi với nhau về những chuyện trong ngành cũng như là nơi gắn kết mọi người lại giúp đỡ nhau thông qua việc hỏi đáp@@</p>
                <p>Thân ái! ~~</p>
                <span>© Blog 2021. All rights reserved.</span>
            </div>
            <div className="footerRight">
                <span className="footerSpan">Thắc mắc với admin </span>
                <input type="text" className="footerInput" placeholder="Câu hỏi" />
                <button className="btnText">Gửi</button>
                {/* <Link className="link" to="/">Những phương thức khác</Link> */}
            </div>
        </div>
    )
}
