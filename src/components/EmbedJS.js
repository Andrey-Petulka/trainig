import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
	var message = document.createElement('div');
	message.style = "padding: 20px 40px";
	message.innerHTML = "Edit this widget on the Components's Panel";

	document.currentScript.parentElement.appendChild(message);
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});