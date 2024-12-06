import{writable,readable,derived,get}from"svelte/store";class ColumnStore{columns;lastColumnID;activeColumnIndex;mainStore;columnsInserted;columnsDuplicated;columnsDeleted;constructor(t,e){this.mainStore=e,this.columns=writable(t.columns),this.lastColumnID=writable(t.lastColumnID||1),this.activeColumnIndex=writable(null),this.columnsInserted=writable([]),this.columnsDuplicated=writable([]),this.columnsDeleted=writable([]),this.fixLastColumnID()}set(t){this.columns.set(t)}get(){return get(this.columns)}fixLastColumnID(){let t=get(this.columns),e=get(this.lastColumnID),s=Math.max.apply(Math,t.map((function(t){return t.id})));s>e&&this.lastColumnID.set(s)}add(t,e){const s=get(this.mainStore.rowStore.rows),n=get(this.columns),l=this._getIncrementedColumnID();let o=n.length;null!==t&&(o="left"==e?t:t+1);let i={id:l,name:"Column Name",format:"text"};n.splice(o,0,i),s.map((t=>{t.content.splice(o,0,{type:"text",value:"",html:""})})),this.columns.set(n),this.mainStore.rowStore.rows.set(s),this.insert(o)}move(t,e){const s=get(this.mainStore.rowStore.rows),n=get(this.columns);if(0==t&&"left"==e||t==n.length-1&&"right"==e)return;let l="left"==e?t-1:t+1,o=n[t];n.splice(t,1),n.splice(l,0,o),s.map((e=>{let s=e.content[t];e.content.splice(t,1),e.content.splice(l,0,s)})),this.columns.set(n),this.mainStore.rowStore.rows.set(s)}insert(t){if("0"==this.mainStore.tableID)return;const e=get(this.columns)[t];e.index=t;const s=get(this.columnsInserted);s.push(e),this.columnsInserted.set(s)}delete(t){this.mainStore.sortOrder.set(null);const e=get(this.mainStore.rowStore.rows),s=get(this.columns),n=get(this.columnsDeleted);n.push(parseInt(s[t].id)),s.splice(t,1),e.map((e=>{e.content.splice(t,1)})),this.columns.set(s),this.mainStore.rowStore.rows.set(e),this.columnsDeleted.set(n),this.activeColumnIndex.set(null)}duplicate(t){const e=get(this.mainStore.rowStore.rows),s=get(this.columns),n=this._getIncrementedColumnID();let l=t+1,o=Object.assign({},s[t]);o.id=n,o.temp_column_id=n,o.source_column_id=s[t].id,s.splice(l,0,o),e.map((e=>{let o=Object.assign({},e.content[t]);o.column_id=n,o.temp_column_id=n,o.source_column_id=s[t].id,e.content.splice(l,0,o)})),this.columns.set(s),this.mainStore.rowStore.rows.set(e),this.columnDuplicate(t,o)}columnDuplicate(t,e){if("0"==this.mainStore.tableID)return;get(this.columns)[t].id;const s=get(this.columnsDuplicated);s.push(e),this.columnsDuplicated.set(s)}changeColumnName(t,e){this.columns.update((s=>(s[e].name=t,s)))}changeColumnOptions(t,e,s){this.columns.update((n=>(n[t][e]=s,n)))}_getIncrementedColumnID(){return this.lastColumnID.set(get(this.lastColumnID)+1),get(this.lastColumnID)}}export default ColumnStore;