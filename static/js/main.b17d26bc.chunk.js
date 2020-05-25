(this["webpackJsonpdnd-tod"]=this["webpackJsonpdnd-tod"]||[]).push([[0],{61:function(e,t,n){e.exports=n(76)},66:function(e,t,n){},67:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),l=(n(66),n(30)),d=n(29),i=n(43),s=n(44),u=n(54),m=n(53),p=n(113),b=(n(67),n(20)),g=n(105),f=n(110),h=n(111),v=Object(g.a)({root:{width:"20rem"},input:{color:"white"}}),x=function(e){var t=e.change,n=e.value,o=v();return a.a.createElement(h.a,{classes:{root:o.root},InputProps:{className:o.input},placeholder:"Enter a Todo",onChange:t,value:n})},E=n(112),O=Object(g.a)({root:{marginLeft:"5px",color:"white",border:"1px solid lightgrey","&:hover":{backgroundColor:"#708594"},"&:disabled":{color:"grey",border:"1px solid grey"}}}),I=function(e){var t=O();return a.a.createElement(E.a,{onClick:e.click,className:t.root,variant:"outlined",disabled:""===e.value},e.children)},j=n(25),w=n(26),k=n(52),y=n.n(k);function T(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 2px;\n"]);return T=function(){return e},e}function S(){var e=Object(j.a)(["\n  min-height: 2rem;\n  width: 12rem;\n  margin: 8px;\n  padding: 2px 8px 2px 8px;\n  display: flex;\n  text-align: left;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 6px 1px #39373f;\n  background-color: lightgrey;\n"]);return S=function(){return e},e}var C=w.a.div(S()),D=w.a.div(T()),N=function(e){var t=e.todo,n=e.index;return a.a.createElement(b.b,{draggableId:t.id,index:n},(function(e){return a.a.createElement(C,Object.assign({ref:e.innerRef},e.draggableProps),a.a.createElement(D,e.dragHandleProps,a.a.createElement(y.a,null)),t.task)}))},H=n(109),A=Object(g.a)({root:{backgroundColor:"lightgrey",color:"black",padding:"10px",border:"solid #00A4FA",width:"fit-content",minWidth:"224px",height:"fit-content",margin:"10px"}}),F=function(e){var t=A();return a.a.createElement(H.a,{className:t.root},e.children)};function P(){var e=Object(j.a)(["\n  //   background-color: blue;\n  min-height: 25px;\n"]);return P=function(){return e},e}function W(){var e=Object(j.a)(["\n  margin-top: 2px;\n  border-bottom: solid;\n"]);return W=function(){return e},e}var B=w.a.h1(W()),J=w.a.div(P()),L=function(e){var t=e.todos,n=e.column;return a.a.createElement(F,null,a.a.createElement(B,null,n.title),a.a.createElement(b.c,{droppableId:n.id},(function(e){return a.a.createElement(J,Object.assign({ref:e.innerRef},e.droppableProps),t.map((function(e,t){return a.a.createElement(N,{key:e.id,todo:e,index:t})})),e.placeholder)})))},R=function(e){var t=e.todosObj,n=e.columns;return e.columnOrder.map((function(e){var o=n[e],r=o.todoIds.map((function(e){return t[e]}));return a.a.createElement(L,{key:o.id,todos:r,column:o})}))},M=Object(g.a)({root:{display:"flex",justifyContent:"center",width:"100%",marginTop:"20px",flexWrap:"wrap"}}),$=function(e){var t=e.onDragEnd,n=e.state,o=e.change,r=e.submit,c=e.click,l=M();return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:r},a.a.createElement(x,{change:o,value:n.newTodo}),a.a.createElement(I,{click:c,value:n.newTodo},"Add Todo")),a.a.createElement(b.a,{onDragEnd:function(e){return t(e)}},a.a.createElement(f.a,{className:l.root},a.a.createElement(R,{todosObj:n.todos,columns:n.columns,columnOrder:n.columnOrder}))))},q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:{},columns:{"column-1":{id:"column-1",title:"ToDo",todoIds:[]},"column-2":{id:"column-2",title:"In Progress",todoIds:[]},"column-3":{id:"column-3",title:"Complete!",todoIds:[]}},columnOrder:["column-1","column-2","column-3"],newTodo:""},e.onDragEnd=function(t){var n=t.destination,o=t.source,a=t.draggableId;if(n&&(n.droppableId!==o.droppableId||n.index!==o.index)){if(n.droppableId!==o.droppableId){var r=e.state.columns[o.droppableId],c=e.state.columns[n.droppableId],i=Object(d.a)(r.todoIds),s=Object(d.a)(c.todoIds),u=Object(l.a)({},e.state.columns);return i.splice(o.index,1),s.splice(n.index,0,a),u[o.droppableId].todoIds=i,u[n.droppableId].todoIds=s,console.log("new columns---",u),void e.setState({columns:u})}var m=e.state.columns[o.droppableId],p=Object(d.a)(m.todoIds),b=Object(l.a)({},e.state.columns);p.splice(o.index,1),p.splice(n.index,0,a),b[n.droppableId].todoIds=p,e.setState({columns:b})}},e.inputChangeHandler=function(t){e.setState({newTodo:t.target.value})},e.addFormSubmitHandler=function(t){if(t.preventDefault(),""!==e.state.newTodo){var n=Object(l.a)({},e.state.todos),o=Object(l.a)({},e.state.columns),a=e.state.columns["column-1"],r=Object(d.a)(a.todoIds),c=Object(p.a)();r.push(c),n[c]={id:c,task:e.state.newTodo},o["column-1"].todoIds=r,e.setState({todos:n,columns:o,newTodo:""})}},e}return Object(s.a)(n,[{key:"render",value:function(){return console.log("columns----",this.state.columns),a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"Title"},"Todo",a.a.createElement("span",null,"List")),a.a.createElement("p",{className:"SubTitle"},"With Drag and Drop"),a.a.createElement($,{state:this.state,onDragEnd:this.onDragEnd,change:this.inputChangeHandler,submit:this.addFormSubmitHandler,click:this.addFormSubmitHandler}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.b17d26bc.chunk.js.map