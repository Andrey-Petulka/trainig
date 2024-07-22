import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Structure, List, LinkBox, Input, Image, Icon, Hr, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section />
		<Section />
		<Components.EmbedHTML position="fixed" />
		<Components.EmbedJS />
		<Components.EmbedJS display="block" />
		<Text margin="0px 0px 0px 0px">
			Some text
		</Text>
		<Structure />
		<Section />
		<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" list-style-type="disc" as="ul">
			<Text margin="0px 0px 0px 0px">
				First item
			</Text>
			<Text margin="0px 0px 0px 0px">
				Second item
			</Text>
			<Text margin="0px 0px 0px 0px">
				Third item
			</Text>
		</List>
		<LinkBox />
		<Link href="#" color="#000000">
			Some text
		</Link>
		<Input display="block" placeholder-color="LightGray" background="white" />
		<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="block" srcSet="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
		<Icon category="md" icon={MdFace} size="64px" />
		<Icon category="md" icon={MdFace} size="64px" />
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Button>
			Button
		</Button>
		<Box min-width="100px" min-height="100px" />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"669e2ce79710450018a17697"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});