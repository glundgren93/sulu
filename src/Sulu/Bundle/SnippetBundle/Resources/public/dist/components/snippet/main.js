define(["sulusnippet/model/snippet"],function(a){"use strict";return{bindModelEvents:function(){this.sandbox.on("sulu.snippets.snippet.delete",function(){this.del()},this),this.sandbox.on("sulu.snippets.snippet.save",function(a){this.save(a)},this),this.sandbox.on("sulu.snippets.snippet.load",function(a){this.load(a)},this),this.sandbox.on("sulu.snippets.snippet.new",function(){this.add()},this),this.sandbox.on("sulu.snippets.snippet.delete",function(a){this.delSnippets(a)},this),this.sandbox.on("sulu.snippets.snippet.list",function(){this.sandbox.emit("sulu.router.navigate","snippet/snippets")},this)},del:function(){this.confirmDeleteDialog(function(a){a&&(this.sandbox.emit("sulu.header.toolbar.item.loading","options-button"),this.snippet.destroy({success:function(){this.sandbox.emit("sulu.router.navigate","snippet/snippets")}.bind(this)}))}.bind(this))},save:function(a){this.sandbox.emit("sulu.header.toolbar.item.loading","save-button"),this.snippet.set(a),this.snippet.save(null,{success:function(b){var c=b.toJSON();a.id?this.sandbox.emit("sulu.snippets.snippet.saved",c):this.sandbox.emit("sulu.router.navigate","snippets/snippet/edit:"+c.id+"/details")}.bind(this),error:function(){this.sandbox.logger.log("error while saving profile")}.bind(this)})},load:function(a){this.sandbox.emit("sulu.router.navigate","snippets/snippet/edit:"+a+"/details")},add:function(){this.sandbox.emit("sulu.router.navigate","snippets/snippet/add")},delSnippets:function(b){return b.length<1?void this.sandbox.emit("sulu.dialog.error.show","No snippets selected for Deletion"):void this.confirmDeleteDialog(function(c){c&&b.forEach(function(b){var c=new a({id:b});c.destroy({success:function(){this.sandbox.emit("husky.datagrid.record.remove",b)}.bind(this)})}.bind(this))}.bind(this))},confirmDeleteDialog:function(a){if(a&&"function"!=typeof a)throw"callback is not a function";this.sandbox.emit("sulu.overlay.show-warning","sulu.overlay.be-careful","sulu.overlay.delete-desc",a.bind(this,!1),a.bind(this,!0))}}});