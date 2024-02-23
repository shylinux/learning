Volcanos({river: {
	product: {name: "产品群", icon: "bi bi-grid-3x3-gap", storm: {
		portal: {name: "官网 portal", icon: "bi bi-globe", index: [
			"portal",
		]},
		desktop: {name: "桌面 desktop", icon: "bi bi-window-desktop", index: [
			"desktop",
		]},
		dream: {name: "空间 dream", icon: "bi bi-diagram-3", index: [
			"dream",
		]},
		store: {name: "商店 store", icon: "bi bi-shop", index: [
			"store",
		]},
	}},
	project: {name: "研发群", icon: "bi bi-git", type: aaa.TECH, debug: true, storm: {
		studio: {name: "研发 studio", icon: "bi bi-code-slash", index: [
			"vimer", "status", "dream", {index: "web.chat.script", args: ["devops"]}, "favor", "word",
		]},
		repos: {name: "源码 repos", icon: "bi bi-git", index: [
			"compile", "publish", "matrix", "store", "web.code.git.repos", "web.code.git.service",
		]},
		stats: {name: "流量 stats", icon: "bi bi-bar-chart-line", index: [
			"stats", "count", "toast", "broad", "spide", "cache", "space", "route",
		]},
	}},
	operate: {name: "运维群", icon: "bi bi-shield-lock", type: aaa.TECH, storm: {
		share: {name: "共享 share", icon: "bi bi-share", index: [
			"share", "token", "qrcode",
		]},
		oauth: {name: "登录 oauth", icon: "bi bi-shield-lock", index: [
			"header", "web.chat.oauth.client", "web.chat.wx.access", "web.chat.message",
		]},
		email: {name: "邮箱 email", icon: "bi bi-envelope", index: [
			"email", "offer", "apply",
		]},
		user: {name: "用户 user", icon: "bi bi-people-fill", index: [
			"user", "totp", "sess", "role",
		]},
		system: {name: "系统 system", icon: "bi bi-ubuntu", index: [
			"dir", "trash", "host", "port", "mirrors", "runtime", "log.debug",
		]},
	}},
}})
