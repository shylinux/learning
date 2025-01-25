package api

import (
	"shylinux.com/x/ice"
)

type demo struct {
	list string `name:"list name auto" help:"示例"`
}

func (s demo) List(m *ice.Message, arg ...string) {
	m.Echo("hello world")
}

func init() { ice.Cmd("web.chat.demo", demo{}) }
