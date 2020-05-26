(this["webpackJsonpdnd-tod"]=this["webpackJsonpdnd-tod"]||[]).push([[0],{68:function(e,t,n){e.exports=n(82)},73:function(e,t,n){},74:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(6),r=n.n(i),d=(n(73),n(16)),l=n(46),c=n(47),s=n(60),u=n(59),m=n(123),g=n(58),f=n(121),p=(n(74),n(25)),b=n(113),h=n(120),E=n(122),v=Object(b.a)({root:{width:"fit-content"},input:{color:"white"}}),S=function(e){var t=e.change,n=e.value,o=e.isEditing,i=v();return o?a.a.createElement(E.a,{classes:{root:i.root},InputProps:{className:null},placeholder:"",onChange:t,defaultValue:n}):a.a.createElement(E.a,{classes:{root:i.root},InputProps:{className:i.input},placeholder:"Enter a Todo",onChange:t,value:n})},x=n(117),O=Object(b.a)({root:{marginLeft:"5px",color:"white",border:"1px solid lightgrey","&:hover":{backgroundColor:"#708594"},"&:disabled":{color:"grey",border:"1px solid grey"}}}),I=function(e){var t=O();return a.a.createElement(x.a,{onClick:e.click,className:t.root,variant:"outlined",disabled:""===e.value},e.children)},y=n(21),j=n(22),w=n(118),k=n(57),C=n.n(k),N=n(55),D=n.n(N),T=n(54),H=n.n(T),F=function(e){var t=e.change,n=e.value,o=e.editSubmit,i=e.id;return a.a.createElement("form",{onSubmit:function(e){return o(e,i)}},a.a.createElement(S,{isEditing:!0,change:t,value:n}))};function J(){var e=Object(y.a)(["\n  display: flex;\n  margin-left: auto;\n"]);return J=function(){return e},e}function P(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 2px;\n"]);return P=function(){return e},e}function A(){var e=Object(y.a)(["\n  min-height: 3rem;\n  width: 12rem;\n  margin: 8px;\n  padding: 2px 8px 2px 8px;\n  display: flex;\n  text-align: left;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 6px 1px #39373f;\n  background-color: lightgrey;\n"]);return A=function(){return e},e}var W=Object(b.a)({root:{padding:"2px"}}),B=j.a.div(A()),M=(j.a.div(P()),j.a.div(J())),R=function(e){var t=e.todo,n=e.index,o=e.onDelete,i=e.onEdit,r=e.showEditForm,d=e.editChange,l=e.editSubmit,c=W(),s=r?a.a.createElement(w.a,{onClick:function(e){return l(e,t.id)},className:c.root},a.a.createElement(H.a,null)):a.a.createElement(w.a,{onClick:function(){return i(t.id)},className:c.root},a.a.createElement(D.a,null));return a.a.createElement(p.b,{draggableId:t.id,index:n},(function(e){return a.a.createElement(B,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),r?a.a.createElement(F,{editSubmit:l,change:d,value:t.task,id:t.id}):t.task,a.a.createElement(M,null,s,a.a.createElement(w.a,{onClick:function(){return o(t.id)},className:c.root,"aria-label":"delete"},a.a.createElement(C.a,null))))}))},L=n(119),U=Object(b.a)({root:{backgroundColor:"lightgrey",color:"black",padding:"10px",border:"solid #00A4FA",width:"fit-content",minWidth:"224px",height:"fit-content",margin:"10px"}}),V=function(e){var t=U();return a.a.createElement(L.a,{className:t.root},e.children)};function $(){var e=Object(y.a)(["\n  //   background-color: blue;\n  min-height: 25px;\n"]);return $=function(){return e},e}function q(){var e=Object(y.a)(["\n  margin-top: 2px;\n  border-bottom: solid;\n"]);return q=function(){return e},e}var z=j.a.h1(q()),G=j.a.div($()),K=function(e){var t=e.todos,n=e.column,o=e.onDelete,i=e.onEdit,r=e.isEditing,d=e.editChange,l=e.editSubmit;return a.a.createElement(V,null,a.a.createElement(z,null,n.title),a.a.createElement(p.c,{droppableId:n.id},(function(e){return a.a.createElement(G,Object.assign({ref:e.innerRef},e.droppableProps),t.map((function(e,t){return a.a.createElement(R,{key:e.id,todo:e,index:t,onDelete:o,onEdit:i,showEditForm:r===e.id,editChange:d,editSubmit:l})})),e.placeholder)})))},Q=function(e){var t=e.todosObj,n=e.columns,o=e.onDelete,i=e.onEdit,r=e.isEditing,d=e.editChange,l=e.editSubmit;return n.map((function(e){var n=e.todoIds.map((function(e){return t.find((function(t){return t.id===e}))}));return a.a.createElement(K,{key:e.id,todos:n,column:e,onDelete:o,onEdit:i,isEditing:r,editChange:d,editSubmit:l})}))},X=Object(b.a)({root:{display:"flex",justifyContent:"center",width:"100%",marginTop:"20px",flexWrap:"wrap"}}),Y=function(e){var t=e.onDragEnd,n=e.state,o=e.change,i=e.editChange,r=e.submit,d=e.click,l=e.onDelete,c=e.onEdit,s=e.editSubmit,u=X();return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:r},a.a.createElement(S,{change:o,value:n.newTodo}),a.a.createElement(I,{click:d,value:n.newTodo},"Add Todo")),a.a.createElement(p.a,{onDragEnd:function(e){return t(e)}},a.a.createElement(h.a,{className:u.root},a.a.createElement(Q,{todosObj:n.todos,columns:n.columns,onDelete:l,onEdit:c,isEditing:n.isEditing,editChange:i,editSubmit:s}))))},Z=Object(g.a)({typography:{fontFamily:["PT Sans Narrow","-apple - system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans - serif"]}}),_=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],columns:[{id:"column-1",title:"ToDo",todoIds:[]},{id:"column-2",title:"In Progress",todoIds:[]},{id:"column-3",title:"Complete!",todoIds:[]}],newTodo:"",editedTodo:"",isEditing:""},e.onDragEnd=function(t){var n=t.destination,o=t.source,a=t.draggableId;if(n&&(n.droppableId!==o.droppableId||n.index!==o.index)){if(n.droppableId!==o.droppableId){var i=Object(d.a)(e.state.columns),r=i.find((function(e){return e.id===o.droppableId})),l=i.find((function(e){return e.id===n.droppableId})),c=Object(d.a)(r.todoIds),s=Object(d.a)(l.todoIds);return c.splice(o.index,1),s.splice(n.index,0,a),r.todoIds=c,l.todoIds=s,void e.setState({columns:i},(function(){localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}var u=Object(d.a)(e.state.columns),m=u.find((function(e){return e.id===o.droppableId})),g=Object(d.a)(m.todoIds);g.splice(o.index,1),g.splice(n.index,0,a),m.todoIds=g,e.setState({columns:u},(function(){localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}},e.inputChangeHandler=function(t){e.setState({newTodo:t.target.value})},e.editChangeHandler=function(t){e.setState({editedTodo:t.target.value})},e.addFormSubmitHandler=function(t){if(t.preventDefault(),""!==e.state.newTodo){var n=Object(d.a)(e.state.todos),o=Object(d.a)(e.state.columns),a=o.find((function(e){return"column-1"===e.id})),i=Object(d.a)(a.todoIds),r=Object(m.a)();i.push(r),n.push({id:r,task:e.state.newTodo}),a.todoIds=i,e.setState({todos:n,columns:o,newTodo:""},(function(){localStorage.setItem("todos",JSON.stringify(e.state.todos)),localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}},e.editFormSubmitHandler=function(t,n){if(t.preventDefault(),e.state.editedTodo){var o=Object(d.a)(e.state.todos);o.map((function(t){return t.id===n?(t.task=e.state.editedTodo,t):t})),e.setState({todos:o,isEditing:""},(function(){localStorage.setItem("todos",JSON.stringify(e.state.todos))}))}else e.setState({isEditing:""})},e.deleteHandler=function(t){if(e.state.todos.find((function(e){return e.id===t}))){var n=e.state.columns.reduce((function(e,n){return n.todoIds=n.todoIds.filter((function(e){return e!==t})),e.push(n),e}),[]),o=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:o,columns:n},(function(){localStorage.setItem("todos",JSON.stringify(e.state.todos)),localStorage.setItem("columns",JSON.stringify(e.state.columns))}))}},e.editHandler=function(t){e.setState({isEditing:t})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todos")),t=JSON.parse(localStorage.getItem("columns"));e&&t&&this.setState({todos:e,columns:t})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"Title"},"Todo",a.a.createElement("span",null,"List")),a.a.createElement("p",{className:"SubTitle"},"With Drag and Drop"),a.a.createElement(f.a,{theme:Z},a.a.createElement(Y,{state:this.state,onDragEnd:this.onDragEnd,change:this.inputChangeHandler,editChange:this.editChangeHandler,submit:this.addFormSubmitHandler,click:this.addFormSubmitHandler,onDelete:this.deleteHandler,onEdit:this.editHandler,editSubmit:this.editFormSubmitHandler})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.7cb82661.chunk.js.map