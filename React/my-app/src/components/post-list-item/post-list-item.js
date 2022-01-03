import React from "react";
const PostListItem = () => {
	return (
		<li className="app-list-item d-flex justify-content-between">
			<span className="app-list-item-label">Стаья номер 1</span>
			<div  className="f-flex justify-content-center align-item-center">
				<button className="btn-star btn-sm">
					<i className="fa fa-star"></i>
				</button>
				<button className="btn-trash btn-sm">
					<i className="fa fa-trash"></i>
				</button>
			</div>
		</li>
	)
}

export default PostListItem;