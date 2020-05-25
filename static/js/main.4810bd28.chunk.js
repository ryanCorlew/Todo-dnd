(this["webpackJsonpdnd-tod"]=this["webpackJsonpdnd-tod"]||[]).push([[0],{61:function(e,t,n){e.exports=n(76)},66:function(e,t,n){},67:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),l=(n(66),n(30)),d=n(29),i=n(43),s=n(44),u=n(54),m=n(53),p=n(113),g=(n(67),n(20)),b=n(105),f=n(110),h=n(111),v=Object(b.a)({root:{width:"20rem"},input:{color:"white"}}),x=function(e){var t=e.change,n=e.value,o=v();return a.a.createElement(h.a,{classes:{root:o.root},InputProps:{className:o.input},placeholder:"Enter a Todo",onChange:t,value:n})},O=n(112),E=Object(b.a)({root:{marginLeft:"5px",color:"white",border:"1px solid lightgrey","&:hover":{backgroundColor:"#708594"},"&:disabled":{color:"grey",border:"1px solid grey"}}}),I=function(e){var t=E();return a.a.createElement(O.a,{onClick:e.click,className:t.root,variant:"outlined",disabled:""===e.value},e.children)},j=n(25),w=n(26),S=n(52),y=n.n(S);function k(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 2px;\n"]);return k=function(){return e},e}function T(){var e=Object(j.a)(["\n  min-height: 2rem;\n  width: 12rem;\n  margin: 8px;\n  padding: 2px 8px 2px 8px;\n  display: flex;\n  text-align: left;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 6px 1px #39373f;\n  background-color: lightgrey;\n"]);return T=function(){return e},e}var N=w.a.div(T()),D=w.a.div(k()),C=function(e){var t=e.todo,n=e.index;return a.a.createElement(g.b,{draggableId:t.id,index:n},(function(e){return a.a.createElement(N,Object.assign({ref:e.innerRef},e.draggableProps),a.a.createElement(D,e.dragHandleProps,a.a.createElement(y.a,null)),t.task)}))},J=n(109),H=Object(b.a)({root:{backgroundColor:"lightgrey",color:"black",padding:"10px",border:"solid #00A4FA",width:"fit-content",minWidth:"224px",height:"fit-content",margin:"10px"}}),A=function(e){var t=H();return a.a.createElement(J.a,{className:t.root},e.children)};function F(){var e=Object(j.a)(["\n  //   background-color: blue;\n  min-height: 25px;\n"]);return F=function(){return e},e}function P(){var e=Object(j.a)(["\n  margin-top: 2px;\n  border-bottom: solid;\n"]);return P=function(){return e},e}var W=w.a.h1(P()),B=w.a.div(F()),L=function(e){var t=e.todos,n=e.column;return a.a.createElement(A,null,a.a.createElement(W,null,n.title),a.a.createElement(g.c,{droppableId:n.id},(function(e){return a.a.createElement(B,Object.assign({ref:e.innerRef},e.droppableProps),t.map((function(e,t){return a.a.createElement(C,{key:e.id,todo:e,index:t})})),e.placeholder)})))},M=function(e){var t=e.todosObj,n=e.columns;return e.columnOrder.map((function(e){var o=n[e],r=o.todoIds.map((function(e){return t[e]}));return a.a.createElement(L,{key:o.id,todos:r,column:o})}))},R=Object(b.a)({root:{display:"flex",justifyContent:"center",width:"100%",marginTop:"20px",flexWrap:"wrap"}}),$=function(e){var t=e.onDragEnd,n=e.state,o=e.change,r=e.submit,c=e.click,l=R();return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:r},a.a.createElement(x,{change:o,value:n.newTodo}),a.a.createElement(I,{click:c,value:n.newTodo},"Add Todo")),a.a.createElement(g.a,{onDragEnd:function(e){return t(e)}},a.a.createElement(f.a,{className:l.root},a.a.createElement(M,{todosObj:n.todos,columns:n.columns,columnOrder:n.columnOrder}))))},q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:{},columns:{"column-1":{id:"column-1",title:"ToDo",todoIds:[]},"column-2":{id:"column-2",title:"In Progress",todoIds:[]},"column-3":{id:"column-3",title:"Complete!",todoIds:[]}},columnOrder:["column-1","column-2","column-3"],newTodo:""},e.onDragEnd=function(t){var n=t.destination,o=t.source,a=t.draggableId;if(n&&(n.droppableId!==o.droppableId||n.index!==o.index)){if(n.droppableId!==o.droppableId){var r=e.state.columns[o.droppableId],c=e.state.columns[n.droppableId],i=Object(d.a)(r.todoIds),s=Object(d.a)(c.todoIds),u=Object(l.a)({},e.state.columns);return i.splice(o.index,1),s.splice(n.index,0,a),u[o.droppableId].todoIds=i,u[n.droppableId].todoIds=s,void e.setState({columns:u},(function(){localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}var m=e.state.columns[o.droppableId],p=Object(d.a)(m.todoIds),g=Object(l.a)({},e.state.columns);p.splice(o.index,1),p.splice(n.index,0,a),g[n.droppableId].todoIds=p,e.setState({columns:g},(function(){localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}},e.inputChangeHandler=function(t){e.setState({newTodo:t.target.value})},e.addFormSubmitHandler=function(t){if(t.preventDefault(),""!==e.state.newTodo){var n=Object(l.a)({},e.state.todos),o=Object(l.a)({},e.state.columns),a=e.state.columns["column-1"],r=Object(d.a)(a.todoIds),c=Object(p.a)();r.push(c),n[c]={id:c,task:e.state.newTodo},o["column-1"].todoIds=r,e.setState({todos:n,columns:o,newTodo:""},(function(){localStorage.setItem("todos",JSON.stringify(e.state.todos)),localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos")),t=JSON.parse(localStorage.getItem("columns"));e&&t&&this.setState({todos:e,columns:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"Title"},"Todo",a.a.createElement("span",null,"List")),a.a.createElement("p",{className:"SubTitle"},"With Drag and Drop"),a.a.createElement($,{state:this.state,onDragEnd:this.onDragEnd,change:this.inputChangeHandler,submit:this.addFormSubmitHandler,click:this.addFormSubmitHandler}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.4810bd28.chunk.js.map