"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[164],{87677:function(e,t,r){var a=r(94578),n=r(67294),l=r(96633),s=r.n(l),i=r(87524),c=r(14280),o=r(72510),m=function(e){return n.createElement(n.Fragment,null)},u=function(e){function t(){var t;return(t=e.call(this)||this).state={wait:!0,data:[],error:!1,errorData:[],url:""},t}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;s().get(this.state.url,{timeout:1e4}).then((function(t){e.setState({data:t.data,wait:!1})})).catch((function(t){console.log(t.response);var r="Request Timed Out";t.response&&(r=t.response.status&&t.response.statusText?"API Error: "+t.response.status+" "+t.response.statusText:"API request failed"),e.setState({error:!0,errorMsg:r,wait:!1})}))},r.renderLoader=function(){if(this.state.wait)return n.createElement("div",{className:"flex h-90v justify-center items-center"},n.createElement(c.Z,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e4}))},r.renderError=function(){if(this.state.error)return n.createElement("div",{className:"flex flex-wrap h-90v"},n.createElement("div",{className:"flex items-end md:items-center justify-end w-full md:w-1/2"},n.createElement("picture",{className:"flex justify-center md:justify-end px-8"},n.createElement("source",{srcSet:"error.webp",type:"image/webp"}),n.createElement("img",{src:"error.webp",className:"w-1/2",alt:"error_image"}))),n.createElement("div",{className:"flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl"},n.createElement("p",{className:"w-full text-red-500"},this.state.errorMsg),n.createElement("p",{className:"w-full text-xl"},"Ah Snap! Something was broken. We're trying to fix this")))},r.render=function(){return n.createElement(i.Z,null,n.createElement(o.Z,{title:"PAGE TITLE GOES HERE"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":n.createElement(m,{data:this.state.data}))},t}(n.Component);t.Z=u},19274:function(e,t,r){r.r(t);var a=r(94578),n=r(67294),l=r(87524),s=r(72510),i=r(77606),c=r(57190),o=r(87677),m=r(71528),u={"Final Year":["President","Vice President","Technical Lead","Web Development Head","Public Relation Head","Finance Head"],Coordinators:["Coordinator"],Executives:["Executive"],Volunteers:["Volunteer"]},d=function(e){var t=e.data;return n.createElement("div",{className:"mx-4 w-full"},n.createElement("div",{className:"w-full profile-backdrop md:bg-slate-900 relative flex items-center justify-center md:justify-start flex-col md:flex-row"},n.createElement("div",{className:"max-h-56 w-3/5 md:max-w-2/5 overflow-hidden border-2 shadow-lg shadow-indigo-500/50 rounded-full md:rounded-none profile-pic relative bg-gray-300 mt-8 md:my-0"},n.createElement("picture",null,n.createElement("source",{srcSet:t.profile_pic_webp_url,type:"image/webp"}),n.createElement("img",{src:t.profile_pic_url,alt:t.name+"_pic",className:"w-full block"}))),n.createElement("div",{className:"h-full w-full md:w-3/5 pt-4 pb-2 md:pt-0 bg-white md:bg-inherit text-black md:text-white"},n.createElement("span",{className:"text-xl block"},t.name),n.createElement("span",{className:"text-lg block"},t.title))),n.createElement("div",{className:"w-full bg-white text-black px-4 flex justify-end text-2xl"},n.createElement("span",{className:"px-2 py-2"},n.createElement("a",{href:t.linkedin_id,rel:"noopener noreferrer",target:"_blank"},n.createElement(i.G,{icon:c.hwn,className:"text-blue-400 hover:text-blue-700 transition-all"}))),n.createElement("span",{className:"px-2 py-2"},n.createElement("a",{href:t.github_id,rel:"noopener noreferrer",target:"_blank"},n.createElement(i.G,{icon:c.zhw,className:"text-gray-500 hover:text-black transition-all"})))))},f=function(e){var t=e.data,r=(0,n.useState)("0"),a=r[0],l=r[1];return n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:m-12 lg:p-8"},n.createElement("select",{className:"h-10 text-white bg-zinc-800 rounded-lg p-2 font-monty",onChange:function(e){return l(e.target.value)}},n.createElement("option",{value:0},"Team SPEC"),Object.keys(u).map((function(e){return n.createElement("option",{value:e,key:e},e)}))),n.createElement("div",{className:"px-8"},Object.keys(u).map((function(e){return n.createElement("div",{className:"text-white text-4xl font-monty text-center transition-all duration-500 overflow-hidden h-fit "+(e===a||"0"===a?"h-auto md:max-h-inf":"max-h-0"),key:e},n.createElement("span",{style:{color:"rgb(46, 224, 154)"}},e),n.createElement("div",{className:"my-10 flex justify-center flex-wrap"},u[e].map((function(e){return t.filter((function(t){return t.title===e})).map((function(e){return n.createElement("div",{className:"w-full md:w-1/2 lg:w-1/3 flex justify-center my-8",key:e.name+"_pic"},n.createElement(d,{data:e}))}))}))))})))))},p=function(e){function t(){var t;return(t=e.call(this)||this).com=void 0,t.state.url=m.dn,t}return(0,a.Z)(t,e),t.prototype.render=function(){return this.state.data.sort((function(e,t){return e.name.localeCompare(t.name)})),n.createElement(l.Z,null,n.createElement(s.Z,{title:"Team"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":n.createElement(f,{data:this.state.data}))},t}(o.Z);t.default=p}}]);
//# sourceMappingURL=component---src-pages-team-index-js-90f748be41000e35d79d.js.map