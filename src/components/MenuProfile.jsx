import React from 'react'
import "@styles/MenuProfile.scss";

const MenuProfile = () => {
    return (
        <div className="MenuProfile">
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
    );
}

export default MenuProfile;