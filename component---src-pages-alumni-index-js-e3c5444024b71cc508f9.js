"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[501],{1659:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(94578),n=a(67294),r=a(77606),c=a(57190);var s=function(e){var t=e.person;return n.createElement("div",{className:"card z-10"},n.createElement("div",{className:"font-monty"},n.createElement("div",{className:"card_bg rounded-2xl overflow-hidden shadow-lg w-72 h-96 "},n.createElement("img",{src:t.profile_pic_webp_url,className:"w-80 h-72 object-fill",alt:"img"}),n.createElement("div",{className:" bottom_text px-4 pt-1 w-auto "},n.createElement("div",{className:"text-left text-md"},n.createElement("ul",{className:""},n.createElement("div",{className:"alumni_batch text-sm font-normal pb-2 text-gray-200"},t.batch),n.createElement("li",{className:"uppercase text-white font-bold"},t.name),n.createElement("li",{className:"uppercase font-normal text-xs text-gray-200"},t.company),n.createElement("a",{className:"alumni_icon",href:t.linkedin_id,target:"_blank",rel:"noreferrer noopener"},n.createElement(r.G,{icon:c.D9H,size:"2x"}))))))))},m=a(96633),i=a.n(m),o=a(14295),d=a(38838),u=a(88014),f=a(14280),p=a(12957),y=a(16948),E=a(56946),x=function(e){function t(){var t;return(t=e.call(this)||this).Selected_Year=function(e){t.setState({selected_year:e.target.value})},t.state={error:!1,wait:!0,data:[],selected_year:0,dummy:[]},t}(0,l.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;i().get(d.sT).then((function(t){e.setState({dummy:t.data,wait:!1})})).catch((function(t){console.log(t),e.setState({error:!0})}))},a.render=function(){var e=this,t={width:"100%",overflow:"hidden",overflowX:"scroll"},a=[2021,2020,2019,2018,"Before 2018"];return this.state.wait?n.createElement(n.Fragment,null,n.createElement(p.Z,{title:"Alumni"}),n.createElement(o.Z,null,n.createElement("div",{className:"flex h-90v justify-center items-center"},n.createElement(f.Z,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e5})))):n.createElement(n.Fragment,null,n.createElement(p.Z,{title:"Alumni"}),n.createElement(o.Z,null,n.createElement("div",{className:"head"},n.createElement("div",{className:"text-5xl font-bold text-center mt-24 mb-20 sm:mb-0"},"OUR ALUMNI"),n.createElement("div",{className:"flex mt-5 mr-2 sm:mr-12 justify-end sm:justify-end fixed left-40 top-1 sm:l-0 sm:static z-50 "},n.createElement("span",{className:"mt-16 mx-2 "},n.createElement(r.G,{icon:u.G_j,size:"1x"})),n.createElement("select",{className:"h-10 text-white bg-zinc-800 rounded-lg p-2 font-monty",onChange:this.Selected_Year},n.createElement("option",{value:0},"All Year"),a.map((function(e){return n.createElement("option",{value:e},e)})))),n.createElement("div",{className:0==this.state.selected_year?"flex flex-col":"flex justify-center",style:{padding:"auto"}},a.map((function(a){var l;return n.createElement(n.Fragment,{key:a},0==e.state.selected_year?n.createElement(n.Fragment,null,n.createElement("div",{className:"batch text-white text-4xl font-monty flex justify-center"},n.createElement("div",{className:"pr-2"},"Batch "),n.createElement("span",{style:{color:"rgb(46, 224, 154)"}},a)),n.createElement("div",{className:"hide",id:a,style:{display:"flex",margin:"0 4vw 30px 4vw"}},n.createElement(y.t,{modules:[E.W_,E.LW],pagination:{clickable:!0},spaceBetween:1,scrollbar:{hide:!1},navigation:!0,slidesPerView:1,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}}},e.state.dummy.map((function(e){return e.batch===a?n.createElement(y.o,{key:e.id,className:"flex md:w-1/2 lg:w-1/3 justify-center px-10 py-10"},n.createElement(s,{person:e})):"Before 2018"==a&&e.batch<2018?n.createElement(y.o,{key:e.id,className:"flex justify-center py-6"},n.createElement(s,{person:e})):null}))))):a!=e.state.selected_year?n.createElement("div",((l={className:"hide",id:a,style:{display:"flex",margin:"0 4vw 10px 4vw"}}).style={display:"none"},l),n.createElement("section",{className:"container_outside_cards"},n.createElement("div",{className:"flex flex-row flex-wrap justify-center gap-10"},e.state.dummy.map((function(e){return e.batch<2018&&n.createElement(s,{person:e,key:e.id})}))))):"Before 2018"==e.state.selected_year?n.createElement("div",{className:"hide",id:a,style:{display:"flex",margin:"0 4vw 10px 4vw"}},n.createElement("section",{className:"container_outside_cards",style:t},n.createElement("div",{className:"flex flex-row flex-wrap justify-center gap-10"},e.state.dummy.map((function(e){return e.batch<2018&&n.createElement(s,{person:e,key:e.id})}))))," "):n.createElement("div",{className:"hide",id:a,style:{display:"flex",margin:"0 4vw 10px 4vw"}},n.createElement("section",{className:"container_outside_cards",style:t},n.createElement("div",{className:"flex flex-row flex-wrap justify-center gap-10"},e.state.dummy.map((function(e){return e.batch===a&&n.createElement(s,{person:e,key:e.id})}))))))}))))))},t}(n.PureComponent)}}]);
//# sourceMappingURL=component---src-pages-alumni-index-js-e3c5444024b71cc508f9.js.map