// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

var CORE = window.CORE;

/////////////////////////////////////
// Plugin class
cr.plugins_.plugin_with_core = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{	
	/////////////////////////////////////
	var pluginProto = cr.plugins_.plugin_with_core.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{		
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;		
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		console.log(CORE);
	};
	
	instanceProto.onDestroy = function ()
	{
	};
	
	// called when saving the full state of the game
	instanceProto.saveToJSON = function ()
	{
	};
	
	instanceProto.loadFromJSON = function (o)
	{
	};
	
	instanceProto.getDebuggerValues = function (propsections)
	{
	};
	
	instanceProto.debugCacheAllStorage = function ()
	{		
	};
	
	instanceProto.onDebugValueEdited = function (header, name, enteredValue)
	{		
	};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};
	
	pluginProto.cnds = new Cnds();
	
	//////////////////////////////////////
	// Actions
	function Acts() {};

	pluginProto.acts = new Acts();
	
	//////////////////////////////////////
	// Expressions
	function Exps() {};	
	
	pluginProto.exps = new Exps();

}());