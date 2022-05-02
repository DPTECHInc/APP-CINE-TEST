import { Outlet } from "react-router-dom";

const Films = () => {
	return (
		<div>
			<h1>FILMS SECTION</h1>
			<Outlet />
		</div>
	);
};

export default Films;
